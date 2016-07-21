package com.system.service.impl;

import com.system.service.CookieService;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/21/16.
 */
@Service
public class CookieServiceImpl implements CookieService {

    public static final String keyUserName="userName";
    public static final String keyExpertId="expertId";

    public String getUserName(HttpServletRequest request){
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

    public int getExpertId(HttpServletRequest request){
        Cookie[] cookies=request.getCookies();
        int expertId=-1;
        for(Cookie cookie:cookies){
            String cookieName=cookie.getName();
            if(keyExpertId.equals(cookieName)){
                String expertIdStr=cookie.getValue();
                expertId=Integer.getInteger(expertIdStr,-1);
            }
        }
        return expertId;
    }


    public void setExpertIdCookie(HttpServletResponse response, int expertId) {
        Cookie cookie=new Cookie(keyExpertId,expertId+"");
        response.addCookie(cookie);
    }

    public void setUserCookie(HttpServletResponse response, String userName){
        Cookie cookie=new Cookie(keyUserName,userName);
        response.addCookie(cookie);
    }
}
