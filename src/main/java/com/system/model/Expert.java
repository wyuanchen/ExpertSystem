package com.system.model;

import java.util.List;

/**
 * Created by yuan on 7/14/16.
 */
public class Expert {
    private String name;
    private String sex;
    private List<EvaluationExperience> evaluationExperiences;

    public void setEvaluationExperiences(List<EvaluationExperience> evaluationExperiences) {
        this.evaluationExperiences = evaluationExperiences;
    }

    public List<EvaluationExperience> getEvaluationExperiences() {
        return evaluationExperiences;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getSex() {
        return sex;
    }
}
