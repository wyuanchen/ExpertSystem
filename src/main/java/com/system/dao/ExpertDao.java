package com.system.dao;

import com.system.model.Expert;
import org.apache.ibatis.annotations.Param;

/**
 * Created by yuan on 7/17/16.
 */
public interface ExpertDao {
    public Expert getExpertByUserName(@Param("userName") String userName);
    public int setExpert(Expert expert);
//    public int deleteExpert(Expert expert);
//    public int deleteAvoidanceUnit(Expert expert);
//    public int deleteEvaluationExperience(Expert expert);
//    public int deleteWorkExperience(Expert expert);
//    public int deleteQualification(Expert expert);
//    public int deleteReason(Expert expert);
    public Expert getExpertByExpertId(@Param("expertId")Integer expertId);
    public int getExpertIdByUserName(@Param("userName")String userName);
}
