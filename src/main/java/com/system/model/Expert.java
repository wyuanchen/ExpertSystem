package com.system.model;

import java.util.List;

/**
 * Created by yuan on 7/14/16.
 */
public class Expert extends User{
    Integer expertId;
    String expertCertificateId;
    String certificateValidTime;
    String name;
    String sex;
    String birthday;
    String party;
    String maxEducation;
    String certificateType;
    String certificateId;
    String academicDegree;
    String address;
    Integer postcode;
    String university;
    String telephone;
    String email;
    String homephone;
    String title;
    String post;
    String isRetire;
    String workplace;
    String employmentDuration;
    String isPartTime;
    String picturePath;
    String status;
    String diplomaId;
    String businessSkill;
    String achievement;
    String others;
    String organization;

    List<String> evaluationFields;
    List<Qualification> qualifications;
    List<AvoidanceUnit> avoidanceUnits;
    List<WorkExperience> workExperiences;
    List<EvaluationExperience> evaluationExperiences;
    Reason reason;

    public void setExpertId(Integer expertId) {
        this.expertId = expertId;
    }

    public Integer getExpertId() {
        return expertId;
    }


    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setEvaluationExperiences(List<EvaluationExperience> evaluationExperiences) {
        this.evaluationExperiences = evaluationExperiences;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getOrganization() {
        return organization;
    }

    public List<EvaluationExperience> getEvaluationExperiences() {
        return evaluationExperiences;
    }

    public void setWorkExperiences(List<WorkExperience> workExperiences) {
        this.workExperiences = workExperiences;
    }

    public List<WorkExperience> getWorkExperiences() {
        return workExperiences;
    }

    public void setReason(Reason reason) {
        this.reason = reason;
    }

    public Reason getReason() {
        return reason;
    }

    public void setAvoidanceUnits(List<AvoidanceUnit> avoidanceUnits) {
        this.avoidanceUnits = avoidanceUnits;
    }

    public List<AvoidanceUnit> getAvoidanceUnits() {
        return avoidanceUnits;
    }

    public void setQualifications(List<Qualification> qualifications) {
        this.qualifications = qualifications;
    }

    public List<Qualification> getQualifications() {
        return qualifications;
    }

    public void setEvaluationFields(List<String> evaluationFields) {
        this.evaluationFields = evaluationFields;
    }

    public List<String> getEvaluationFields() {
        return evaluationFields;
    }

    public String getExpertCertificateId() {
        return expertCertificateId;
    }

    public String getCertificateValidTime() {
        return certificateValidTime;
    }

    public String getName() {
        return name;
    }

    public String getSex() {
        return sex;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getParty() {
        return party;
    }

    public String getMaxEducation() {
        return maxEducation;
    }

    public String getCertificateType() {
        return certificateType;
    }

    public String getCertificateId() {
        return certificateId;
    }

    public String getAcademicDegree() {
        return academicDegree;
    }

    public String getAddress() {
        return address;
    }

    public Integer getPostcode() {
        return postcode;
    }

    public String getUniversity() {
        return university;
    }


    public String getEmail() {
        return email;
    }

    public String getHomephone() {
        return homephone;
    }

    public String getTitle() {
        return title;
    }

    public String getPost() {
        return post;
    }

    public String getIsRetire() {
        return isRetire;
    }

    public String getWorkplace() {
        return workplace;
    }

    public String getEmploymentDuration() {
        return employmentDuration;
    }

    public String getIsPartTime() {
        return isPartTime;
    }

    public String getPicturePath() {
        return picturePath;
    }

    public String getStatus() {
        return status;
    }

    public String getDiplomaId() {
        return diplomaId;
    }

    public String getBusinessSkill() {
        return businessSkill;
    }

    public String getAchievement() {
        return achievement;
    }

    public String getOthers() {
        return others;
    }

    public void setExpertCertificateId(String expertCertificateId) {
        this.expertCertificateId = expertCertificateId;
    }

    public void setCertificateValidTime(String certificateValidTime) {
        this.certificateValidTime = certificateValidTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public void setMaxEducation(String maxEducation) {
        this.maxEducation = maxEducation;
    }

    public void setCertificateType(String certificateType) {
        this.certificateType = certificateType;
    }

    public void setCertificateId(String certificateId) {
        this.certificateId = certificateId;
    }

    public void setAcademicDegree(String academicDegree) {
        this.academicDegree = academicDegree;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPostcode(Integer postcode) {
        this.postcode = postcode;
    }

    public void setUniversity(String university) {
        this.university = university;
    }


    public void setEmail(String email) {
        this.email = email;
    }

    public void setHomephone(String homephone) {
        this.homephone = homephone;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public void setIsRetire(String isRetire) {
        this.isRetire = isRetire;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public void setEmploymentDuration(String employmentDuration) {
        this.employmentDuration = employmentDuration;
    }

    public void setIsPartTime(String isPartTime) {
        this.isPartTime = isPartTime;
    }

    public void setPicturePath(String picturePath) {
        this.picturePath = picturePath;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDiplomaId(String diplomaId) {
        this.diplomaId = diplomaId;
    }

    public void setBusinessSkill(String businessSkill) {
        this.businessSkill = businessSkill;
    }

    public void setAchievement(String achievement) {
        this.achievement = achievement;
    }

    public void setOthers(String others) {
        this.others = others;
    }
}
