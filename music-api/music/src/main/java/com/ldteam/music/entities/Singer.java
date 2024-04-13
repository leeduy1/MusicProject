package com.ldteam.music.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Singer")
public class Singer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "singer_id")
    private Integer singerId;

    @Column(name = "singer_name", nullable = false)
    private String singerName;

    @Column(name = "singer_info")
    private String singerInfo;

    @OneToMany(mappedBy = "singer")
    private List<Performance> performances;

    // Getters and Setters

    public Integer getSingerId() {
        return singerId;
    }

    public void setSingerId(Integer singerId) {
        this.singerId = singerId;
    }

    public String getSingerName() {
        return singerName;
    }

    public void setSingerName(String singerName) {
        this.singerName = singerName;
    }

    public String getSingerInfo() {
        return singerInfo;
    }

    public void setSingerInfo(String singerInfo) {
        this.singerInfo = singerInfo;
    }

    public List<Performance> getPerformances() {
        return performances;
    }

    public void setPerformances(List<Performance> performances) {
        this.performances = performances;
    }
}
