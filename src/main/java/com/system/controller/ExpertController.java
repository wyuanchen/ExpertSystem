package com.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.system.model.Expert;
import com.system.model.ExpertDesc;
import com.system.model.Reason;
import com.system.service.CookieService;
import com.system.service.FileService;
import com.system.service.ManageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yuan on 7/14/16.
 */
@Controller
public class ExpertController {

    public static final String keyStatus="status";
    public static final String valueStatusOk="ok";
    public static final String valueStatusFail="fail";

//    public static final String keyExpertDescs="expertDescs";

    @Resource
    ManageService manageService;
    @Resource
    CookieService cookieService;
    @Resource
    FileService fileService;

    @RequestMapping("/getExpert")
    public @ResponseBody Expert getExpert(HttpServletRequest request){
        String userName=cookieService.getUserName(request);
        Expert expert= manageService.getExpert(userName);
        return expert;
    }

    @RequestMapping("/admin/getExpertById")
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

    @RequestMapping("/submitInfo")
    public @ResponseBody Object submitInfo(HttpServletRequest request){
        Map<String,Object> result=new HashMap<String, Object>();
        String userName=cookieService.getUserName(request);
        boolean isSubmit=manageService.changeExpertStatus(userName,"待审核");
        if(isSubmit)
            result.put(keyStatus,valueStatusOk);
        else
            result.put(keyStatus,valueStatusFail);
        return result;
    }


    @RequestMapping("/admin/getSumOfSubmitExpert")
    public @ResponseBody Object getSumOfSubmitExpert(){
        int sum=manageService.getSumOfSubmitExpert();
        Map<String,Object> result=new HashMap<String, Object>();
        result.put("sum",sum);
        return result;
    }


    @RequestMapping("/admin/getAllExpertDesc")
    public @ResponseBody List<ExpertDesc> getAllExpertDesc(@RequestBody JSONObject params){
        String status=params.getString("status");
        String field=params.getString("field");
        List<ExpertDesc> expertDescList=manageService.getAllExpertDesc(status,field);
        return expertDescList;
    }

    @RequestMapping("/admin/comfirmExpert")
    public @ResponseBody Object comfirmExpert(@RequestBody JSONObject params){
        Map<String,Object> result=new HashMap<String, Object>();
        String expertCertificateId=params.getString("expertCertificateId");
        String certificateValidTime=params.getString("certificateValidTime");
        Integer expertId=params.getInteger("expertId");
        boolean isOk=manageService.setExpertCertificate(expertCertificateId,certificateValidTime,expertId);
        if(isOk)
            result.put(keyStatus,valueStatusOk);
        else
            result.put(keyStatus,valueStatusFail);
        return result;
    }

    @RequestMapping("/admin/setFailReason")
    public @ResponseBody Object setFailReason(@RequestBody Reason reason){
        Map<String,Object> result=new HashMap<String, Object>();
        boolean isOk=manageService.setFailReason(reason);
        if(isOk)
            result.put(keyStatus,valueStatusOk);
        else
            result.put(keyStatus,valueStatusFail);
        return result;
    }

    @RequestMapping("/uploadPic")
    public @ResponseBody Object  handleUploadPic(@RequestParam("file")MultipartFile file, HttpServletRequest request){
//        String oname=file.getOriginalFilename();
//        String name=file.getOriginalFilename();
        String userName=cookieService.getUserName(request);
        String picUrl=fileService.saveImg(file);
        String oldPicUrl=manageService.getPicUrl(userName);
        fileService.deleteFile(oldPicUrl);
        manageService.setPicUrl(userName,picUrl);
        Map<String,Object> result=new HashMap<String, Object>();
        result.put(keyStatus,valueStatusOk);
        return result;

    }

}
