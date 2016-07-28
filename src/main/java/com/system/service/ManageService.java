package com.system.service;

import com.system.model.Expert;
import com.system.model.ExpertDesc;
import com.system.model.Reason;
import com.system.model.User;

import java.util.List;

/**
 * Created by yuan on 7/20/16.
 */
public interface ManageService {
    public Expert getExpert(String userName);
    public void updateExpert(Expert expert);
    public Expert getExpertByExpertId(Integer expertId);


    public int registerNewExpert(User user);

    public boolean registerNewAdmin(User user);

    public boolean checkUserValid(User user);

    int getExpertId(String userName);

    boolean changePassword(String userName, String oldPassword, String newPassowrd);

    boolean checkUserNameUnique(String userName);

    /**
     * 改变专家状态
     * @param userName
     * @param status
     * @return
     */
    boolean changeExpertStatus(String userName, String status);

    /**
     * 获取待审专家的数量
     * @return
     */
    int getSumOfSubmitExpert();

    List<ExpertDesc> getAllExpertDesc(String status, String field);

    boolean setExpertCertificate(String expertCertificateId, String certificateValidTime, Integer expertId);

    boolean setFailReason(Reason reason);

    String getPicUrl(String userName);

    void setPicUrl(String userName,String picUrl);

    boolean getAdmin(String userName);
}
