package com.system.model;

/**
 * Created by yuan on 7/17/16.
 */
public class Reason {
    String failReason;
    String reasonType;
    Integer expertId;

    public void setExpertId(Integer expertId) {
        this.expertId = expertId;
    }

    public Integer getExpertId() {
        return expertId;
    }

    public void setFailReason(String failReason) {
        this.failReason = failReason;
    }

    public String getFailReason() {
        return failReason;
    }

    public void setReasonType(String reasonType) {
        this.reasonType = reasonType;
    }

    public String getReasonType() {
        return reasonType;
    }
}
