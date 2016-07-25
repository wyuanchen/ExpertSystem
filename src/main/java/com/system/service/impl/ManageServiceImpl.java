package com.system.service.impl;

import com.system.dao.ExpertDao;
import com.system.dao.ReasonDao;
import com.system.dao.UserDao;
import com.system.model.Expert;
import com.system.model.User;
import com.system.service.ManageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

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
        return expertDao.getExpertByUserName(userName);
    }

    public void updateExpert(Expert expert){
        expertDao.setExpert(expert);
    }

    public Expert getExpertByExpertId(Integer expertId){
        return expertDao.getExpertByExpertId(expertId);
    }

    public int registerNewExpert(User user) {
        int result=userDao.addNewUser(user);
        expertDao.addNewExpert(user.getUserName());
        if(result<=0)
            return -1;
        return 1;
    }

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
        String userType=user.getUserType();
        String realUserType=realUser.getUserType();
        String password=user.getPassword();
        String realPassword=realUser.getPassword();
        if(realUser==null||!realUserType.equals(userType))
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


}
