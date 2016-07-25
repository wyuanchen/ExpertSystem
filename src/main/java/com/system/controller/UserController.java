package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.system.model.User;
import com.system.service.CookieService;
import com.system.service.ManageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by yuan on 7/21/16.
 */
@Controller
public class UserController {

    public static final String keyStatus="status";
    public static final String valueStatusFail="fail";
    public static final String valueStatusOk="ok";

    @Resource
    ManageService manageService;
    @Resource
    CookieService cookieService;


    @RequestMapping("/register")
    public @ResponseBody Object registerNewUser(@RequestBody User user,HttpServletResponse response){
        String userType=user.getUserType();
        Map<String,Object> result=new HashMap<String, Object>();
        if(User.UserTypeExpert.equals(userType)){
            int expertId=manageService.registerNewExpert(user);
            if(expertId>0){
                result.put(keyStatus,valueStatusOk);
                cookieService.setUserCookie(response,user.getUserName());
                cookieService.setExpertIdCookie(response,expertId);
            }else{
                result.put(keyStatus,valueStatusFail);
            }
        }else{
            if(manageService.registerNewAdmin(user)){
                result.put(keyStatus,valueStatusOk);
                cookieService.setUserCookie(response,user.getUserName());
            }else{
                result.put(keyStatus,valueStatusFail);
            }
        }
        return result;
    }

    @RequestMapping("/login")
    public @ResponseBody Object loginUser(@RequestBody User user,HttpServletResponse response){
        Map<String,Object> result=new HashMap<String, Object>();
        boolean isValid=manageService.checkUserValid(user);
        if(isValid==false){
            result.put(keyStatus,valueStatusFail);
            return result;
        }
        result.put(keyStatus,valueStatusOk);
        String userName=user.getUserName();
        cookieService.setUserCookie(response,userName);
        String userType=user.getUserType();
        if(User.UserTypeExpert.equals(userType)){
            int expertId=manageService.getExpertId(userName);
            cookieService.setExpertIdCookie(response,expertId);
        }
        return result;
    }

    @RequestMapping("/changepassword")
    public @ResponseBody Object changeUserPassword(@RequestBody JSONObject passwordJson,HttpServletRequest request){
        Map<String,Object> result=new HashMap<String, Object>();
        String oldPassword=passwordJson.getString("oldPassword");
        String newPassowrd=passwordJson.getString("newPassword");
        String userName=cookieService.getUserName(request);
        boolean isChange=manageService.changePassword(userName,oldPassword,newPassowrd);
        if(isChange){
            result.put(keyStatus,valueStatusOk);
        }else{
            result.put(keyStatus,valueStatusFail);
        }
        return result;
    }






}
