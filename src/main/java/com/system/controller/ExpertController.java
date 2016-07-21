package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.system.model.Expert;
import com.system.service.CookieService;
import com.system.service.ManageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/14/16.
 */
@Controller
public class ExpertController {


    @Resource
    ManageService manageService;
    @Resource
    CookieService cookieService;

    @RequestMapping("/getExpert")
    public @ResponseBody Expert getExpert(HttpServletRequest request){
        String userName=cookieService.getUserName(request);
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
        String userName=cookieService.getUserName(request);
        if(userName==null){
            userName="yuan";
            cookieService.setUserCookie(response,userName);
        }
    }

    @RequestMapping("/updateExpert")
    public @ResponseBody void updateExpert(@RequestBody JSONObject expertJson,HttpServletRequest request){
        Expert expert=JSONObject.toJavaObject(expertJson,Expert.class);
        String userName=cookieService.getUserName(request);
        expert.setUserName(userName);
        manageService.updateExpert(expert);
    }





}
