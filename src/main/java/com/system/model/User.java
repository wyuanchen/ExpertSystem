package com.system.model;

/**
 * Created by yuan on 7/17/16.
 */
public class User {
    private String userName;
    private String password;
    private String userType;

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserType() {
        return userType;
    }
}
