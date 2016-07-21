package com.system.model;

import java.util.List;

/**
 * Created by yuan on 7/18/16.
 */
public class ExpertInfo {
    private Expert expert;
    private List<String> evaluationFields;
    private List<Qualification> qualifications;
    private List<AvoidanceUnit> avoidanceUnits;
    private List<WorkExperience> workExperiences;
    private Reason reason;

    public void setExpert(Expert expert) {
        this.expert = expert;
    }

    public void setEvaluationFields(List<String> evaluationFields) {
        this.evaluationFields = evaluationFields;
    }

    public void setQualifications(List<Qualification> qualifications) {
        this.qualifications = qualifications;
    }

    public void setAvoidanceUnits(List<AvoidanceUnit> avoidanceUnits) {
        this.avoidanceUnits = avoidanceUnits;
    }

    public void setWorkExperiences(List<WorkExperience> workExperiences) {
        this.workExperiences = workExperiences;
    }

    public void setReason(Reason reason) {
        this.reason = reason;
    }

    public Expert getExpert() {
        return expert;
    }

    public List<String> getEvaluationFields() {
        return evaluationFields;
    }

    public List<Qualification> getQualifications() {
        return qualifications;
    }

    public List<AvoidanceUnit> getAvoidanceUnits() {
        return avoidanceUnits;
    }

    public List<WorkExperience> getWorkExperiences() {
        return workExperiences;
    }

    public Reason getReason() {
        return reason;
    }
}
