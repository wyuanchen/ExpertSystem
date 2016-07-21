package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.system.model.Expert;
import com.system.service.ManageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/14/16.
 */
@Controller
public class ExpertController {

    public static final String keyUserName="userName";

    @Resource
    ManageService manageService;

    @RequestMapping("/getExpert")
    public @ResponseBody Expert getExpert(HttpServletRequest request){
        String userName=getUserName(request);
        Expert expert= manageService.getExpert(userName);
        return expert;
    }

    @RequestMapping("/getExpertById")
    public @ResponseBody Expert getExpertById(@RequestBody JSONObject expertIdJson){
        Integer expertId=expertIdJson.getInteger("expertId");
        Expert expert=manageService.getExpertByExpertId(expertId);
        return expert;
    }


    @RequestMapping("/setCookie")
    public @ResponseBody void setCookie(HttpServletRequest request,HttpServletResponse response){
        String userName=getUserName(request);
        if(userName==null){
            userName="yuan";
            setUserCookie(response,userName);
        }
    }

    @RequestMapping("/updateExpert")
    public @ResponseBody void updateExpert(@RequestBody JSONObject expertJson,HttpServletRequest request){
        Expert expert=JSONObject.toJavaObject(expertJson,Expert.class);
        String userName=getUserName(request);
        expert.setUserName(userName);
        manageService.updateExpert(expert);
    }


    private String getUserName(HttpServletRequest request){
        Cookie[] cookies=request.getCookies();
        String userName=null;
        for(Cookie cookie:cookies){
            String cookieName=cookie.getName();
            if(keyUserName.equals(cookieName)){
                userName=cookie.getValue();
                break;
            }
        }
        return userName;
    }

    private void setUserCookie(HttpServletResponse response,String userName){
        Cookie cookie=new Cookie(keyUserName,userName);
        response.addCookie(cookie);
    }


}
