package com.system.service.impl;

import com.system.dao.ExpertDao;
import com.system.dao.ReasonDao;
import com.system.dao.UserDao;
import com.system.model.Expert;
import com.system.service.ManageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by yuan on 7/20/16.
 */
@Service
public class ManageServiceImpl implements ManageService{

    @Resource
    private ExpertDao expertDao;
    @Resource
    private ReasonDao reasonDao;
    @Resource
    private UserDao userDao;

    public Expert getExpert(String userName){
        if(userName==null)
            return null;
        return expertDao.getExpertByUserName(userName);
    }

    public void updateExpert(Expert expert){
        expertDao.setExpert(expert);
    }

    public Expert getExpertByExpertId(Integer expertId){
        return expertDao.getExpertByExpertId(expertId);
    }
}
