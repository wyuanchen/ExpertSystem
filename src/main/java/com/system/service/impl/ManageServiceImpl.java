package com.system.service.impl;

import com.system.dao.ExpertDao;
import com.system.dao.ReasonDao;
import com.system.dao.UserDao;
import com.system.model.Expert;
import com.system.model.ExpertDesc;
import com.system.model.Reason;
import com.system.model.User;
import com.system.service.ManageService;
import com.system.util.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by yuan on 7/20/16.
 */
@Service
public class ManageServiceImpl implements ManageService{

    private int expertIdSeed=20121;
    @Resource
    private ExpertDao expertDao;
    @Resource
    private ReasonDao reasonDao;
    @Resource
    private UserDao userDao;

    public Expert getExpert(String userName){
        if(userName==null)
            return null;
        Expert expert=expertDao.getExpertByUserName(userName);
        wrapExpertStatus(expert);
        return expert;
    }


    @Transactional(isolation = Isolation.READ_COMMITTED)
    public void updateExpert(Expert expert){
        expertDao.setExpert(expert);
    }

    public Expert getExpertByExpertId(Integer expertId){
        Expert expert=expertDao.getExpertByExpertId(expertId);
        wrapExpertStatus(expert);
        return expert;
    }

    /**
     * 封装专家的status
     * @param expert
     */
    private void wrapExpertStatus(Expert expert) {
        String status=expert.getStatus();
        if(status==null)
            return;
        if(status.equals("待审核")){
            expert.setStatus("审核中");
        }else if(status.equals("失效")){
            expert.setStatus("已驳回");
        }
    }

    @Transactional
    public int registerNewExpert(User user) {
        int result=userDao.addNewUser(user);
        expertDao.addNewExpert(user.getUserName());
        if(result<=0)
            return -1;
        return 1;
    }

    @Transactional
    public boolean registerNewAdmin(User user) {
        int result=userDao.addNewUser(user);
        if(result>0)
            return true;
        return false;
    }


    /*private int generateExpertId(User user){
        Expert expert=new Expert();
        expert.setUserName(user.getUserName());
        expertDao.setExpert(expert);
        return expertIdSeed++;
    }*/

    public boolean checkUserValid(User user){
        String userName=user.getUserName();
        User realUser=userDao.getUserByUserName(userName);
        if(realUser==null)
            return false;
        String userType=user.getUserType();
        String realUserType=realUser.getUserType();
        String password=user.getPassword();
        String realPassword=realUser.getPassword();
        if(!realUserType.equals(userType))
            return false;
        if(checkPasswordValid(realPassword,password))
            return true;
        return false;
    }

    private boolean checkPasswordValid(String realPassword, String password) {
        return realPassword.equals(password);
    }

    public int getExpertId(String userName){
        int expertId=expertDao.getExpertIdByUserName(userName);
        return expertId;
    }

    @Transactional
    public boolean changePassword(String userName, String oldPassword, String newPassowrd){
        User user=userDao.getUserByUserName(userName);
        String realPassword=user.getPassword();
        if(!checkPasswordValid(realPassword,oldPassword))
            return false;
        user.setPassword(newPassowrd);
        userDao.changeUserPassword(user);
        return true;
    }

    public boolean checkUserNameUnique(String userName){
        User user=userDao.getUserByUserName(userName);
        if(user==null)
            return true;
        return false;
    }

    public boolean changeExpertStatus(String userName, String status){
        int isChanged=expertDao.changeExpertStatus(userName,status);
        return isChanged>0;
    }

    public int getSumOfSubmitExpert(){
        return expertDao.getSumOfSubmitExpert();
    }

    public List<ExpertDesc> getAllExpertDesc(String status, String field){
        return expertDao.getAllExpertDesc(status,field);
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public boolean setExpertCertificate(String expertCertificateId, String certificateValidTime, Integer expertId){
        int affected=expertDao.setExpertCertificate(expertCertificateId,certificateValidTime,expertId);
        int isChangeSstatus=expertDao.changeExpertStatusByExpertId(expertId,"可用");
        expertDao.deleteFailReason(expertId);
        return affected>0;
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public boolean setFailReason(Reason reason){
        int affect=expertDao.setFailReason(reason);
        expertDao.changeExpertStatusByExpertId(reason.getExpertId(),"失效");
        return affect>0;
    }

    public String getPicUrl(String userName){
        return expertDao.getPicUrl(userName);
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public void setPicUrl(String userName,String picUrl){
        picUrl=picUrl.replaceFirst(Configuration.imageDirectory,Configuration.serverPicUrl);
        expertDao.setPicturePath(userName, picUrl);
    }

    public boolean getAdmin(String userName){
        if(userName==null)
            return false;
        int sum=userDao.getAdmin(userName);
        return sum>0;
    }


}
