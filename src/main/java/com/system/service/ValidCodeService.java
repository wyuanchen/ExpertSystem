package com.system.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuan on 7/25/16.
 */
public interface ValidCodeService {
    public boolean checkValidCodeIsRight(String validCode,HttpServletRequest request);
    public String generateValidCode(HttpServletRequest request,HttpServletResponse response);
}




