package com.system.dao;

import com.system.model.Expert;
import com.system.model.ExpertDesc;
import com.system.model.Reason;
import org.apache.ibatis.annotations.Param;

import java.util.List;

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
    public int addNewExpert(@Param("userName")String userName);

    int changeExpertStatus(@Param("userName") String userName,@Param("status") String status);

    int getSumOfSubmitExpert();

    List<ExpertDesc> getAllExpertDesc(@Param("status") String status,@Param("field") String field);

    int setExpertCertificate(@Param("expertCertificateId")String expertCertificateId, @Param("certificateValidTime") String certificateValidTime,@Param("expertId") Integer expertId);
    int changeExpertStatusByExpertId(@Param("expertId")Integer expertId,@Param("status")String status);

    int setFailReason(Reason reason);

    void deleteFailReason(Integer expertId);
}
