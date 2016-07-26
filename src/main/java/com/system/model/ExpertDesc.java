package com.system.model;

/**
 * Created by yuan on 7/26/16.
 */
public class ExpertDesc {
    private Integer expertId;
    private String name;
    private String workplace;
    private String telephone;
    private String registerState="注册";
    private String status;

    public void setExpertId(Integer expertId) {
        this.expertId = expertId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setRegisterState(String registerState) {
        this.registerState = registerState;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getExpertId() {

        return expertId;
    }

    public String getName() {
        return name;
    }

    public String getWorkplace() {
        return workplace;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getRegisterState() {
        return registerState;
    }

    public String getStatus() {
        return status;
    }
}
