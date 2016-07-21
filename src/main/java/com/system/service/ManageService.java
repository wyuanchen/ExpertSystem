package com.system.service;

import com.system.model.Expert;

/**
 * Created by yuan on 7/20/16.
 */
public interface ManageService {
    public Expert getExpert(String userName);
    public void updateExpert(Expert expert);
    public Expert getExpertByExpertId(Integer expertId);

}
