package com.system.service;

import com.system.model.Expert;
import com.system.model.User;

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
}
