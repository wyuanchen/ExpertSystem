package com.system.model;

/**
 * Created by yuan on 7/14/16.
 */
public class EvaluationExperience {
    Integer experienceId;
    String experienceTime;
    String missionName;
    String missionDescription;
    String missionType;

    public void setExperienceId(Integer experienceId) {
        this.experienceId = experienceId;
    }

    public void setExperienceTime(String experienceTime) {
        if(experienceTime==null||"".equals(experienceTime.trim()))
            return;
        this.experienceTime = experienceTime;
    }

    public void setMissionName(String missionName) {
        this.missionName = missionName;
    }

    public void setMissionDescription(String missionDescription) {
        this.missionDescription = missionDescription;
    }

    public void setMissionType(String missionType) {
        this.missionType = missionType;
    }

    public Integer getExperienceId() {
        return experienceId;
    }

    public String getExperienceTime() {
        return experienceTime;
    }

    public String getMissionName() {
        return missionName;
    }

    public String getMissionDescription() {
        return missionDescription;
    }

    public String getMissionType() {
        return missionType;
    }
}
