package com.system.model;

/**
 * Created by yuan on 7/17/16.
 */
public class WorkExperience {
    String workExperienceId;
    String startTime;
    String endTime;
    String workplace;
    String post;
    String reference;

    public void setWorkExperienceId(String workExperienceId) {
        this.workExperienceId = workExperienceId;
    }

    public void setStartTime(String startTime) {
        if(startTime==null||"".equals(startTime.trim()))
            return;
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        if(endTime==null||"".equals(endTime.trim()))
            return;
        this.endTime = endTime;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getWorkExperienceId() {
        return workExperienceId;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getWorkplace() {
        return workplace;
    }

    public String getPost() {
        return post;
    }

    public String getReference() {
        return reference;
    }
}
