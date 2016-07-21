package com.system.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/21/16.
 */
public interface CookieService {

    public String getUserName(HttpServletRequest request);
    public int getExpertId(HttpServletRequest request);
    public void setExpertIdCookie(HttpServletResponse response, int expertId);
    public void setUserCookie(HttpServletResponse response, String userName);


}
