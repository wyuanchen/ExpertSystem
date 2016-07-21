package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.system.dao.ExpertDao;
import com.system.dao.UserDao;
import com.system.model.AvoidanceUnit;
import com.system.model.Expert;
import com.system.model.WorkExperience;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yuan on 7/20/16.
 */
@Controller
@RequestMapping("/test")
public class TestController {

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



    @Resource
    private ExpertDao expertDao;
    @Resource
    private UserDao userDao;

    @RequestMapping("/getExpert")
    @ResponseBody
    public Object getExpert(){
        Expert expert=expertDao.getExpertByUserName("yuan");
        return expert;
    }

    @RequestMapping("/addExpert")
    @ResponseBody
    public void addExpertInfo(){
        Expert expert=new Expert();
        expert.setUserName("yuan");
        List<AvoidanceUnit> avoidanceUnitList=new ArrayList<AvoidanceUnit>();
        for(int i=0;i<1;i++){
            AvoidanceUnit avoidanceUnit=new AvoidanceUnit();
            avoidanceUnit.setIsWorkPlace("是");
            avoidanceUnit.setUnitName("单位"+i);
            avoidanceUnitList.add(avoidanceUnit);
        }
        List<String> evaluationFields=new ArrayList<String>();
        for(int i=0;i<2;i++){
            evaluationFields.add("评估领域"+i);
        }
        expert.setEvaluationFields(evaluationFields);
        expert.setAvoidanceUnits(avoidanceUnitList);
        List<WorkExperience> workExperiences=new ArrayList<WorkExperience>();
        WorkExperience workExperience=new WorkExperience();
        workExperience.setStartTime("2014-10-12");
        workExperiences.add(workExperience);
        expert.setWorkExperiences(workExperiences);
        expertDao.setExpert(expert);
    }
}
