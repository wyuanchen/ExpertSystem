package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/14/16.
 */
@Controller
public class ExpertController {

    @RequestMapping("/test")
    @ResponseBody
    public Object test(@RequestBody JSONObject expert){
//        JSONObject jsonObject=JSONObject.parseObject("");
        System.out.println(expert);
//        data.get("expert");
        return expert;
    }

    @RequestMapping("/cookie")
    @ResponseBody
    public Object cookie(HttpServletRequest request, HttpServletResponse response){
        Cookie[] cookies=request.getCookies();
        Cookie cookie=new Cookie("one","123456");
        response.addCookie(cookie);
        return "ssss";
    }
    @RequestMapping("/cookie2")
    @ResponseBody
    public Object cookie2(HttpServletRequest request, HttpServletResponse response){
        Cookie[] cookies=request.getCookies();
        boolean ok=false;
        String userName=null;
        for(Cookie cookie:cookies){
            if(cookie.getName().equals("user"))
                userName=cookie.getValue();
        }
        if(userName==null){
            Cookie cookie=new Cookie("user","wenyuan");
            response.addCookie(cookie);
            return "第一次登陆";
        }else{
            return "欢迎回来～"+userName;
        }
    }
}
