package com.system.interceptor;

import com.system.service.CookieService;
import com.system.service.ManageService;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/28/16.
 */
public class UserAuthorityInterceptor implements HandlerInterceptor{
    @Resource
    CookieService cookieService;
    @Resource
    ManageService manageService;

    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        String userName= cookieService.getUserName(httpServletRequest);
        boolean isAdmin =manageService.getAdmin(userName);
        return isAdmin;
    }

    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
