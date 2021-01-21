package com.example.myquiz.model;

import com.google.gson.annotations.SerializedName;

public class RetrofitScorecard {

    @SerializedName("id")
    private String id;

    @SerializedName("subject")
    private String subject;

    @SerializedName("name")
    private String name;

    @SerializedName("outcome")
    private int outcome;


    public RetrofitScorecard() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getOutcome() {
        return outcome;
    }
    public void setOutcome(int outcome){ this.outcome = outcome; }


    public RetrofitScorecard(String id, String name, String subject, int outcome) {
        this.id =id;
        this.name =  name;
        this.subject = subject;
        this.outcome = outcome;

    }
}
