package com.ldteam.music.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime; // Sử dụng thư viện java.time thay cho java.util.Date

@Entity
@Table(name = "Performance")
public class Performance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "performance_id")
    private Integer performanceId;

    @Column(name = "singer_id", nullable = false)
    private Integer singerId;

    @Column(name = "song_id", nullable = false)
    private Integer songId;

    @Column(name = "performance_day", nullable = false)
    private LocalDateTime performanceDay; // Thay đổi kiểu dữ liệu thành LocalDateTime

    @Column(name = "performance_address")
    private String performanceAddress;

    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id", insertable = false, updatable = false)
    private Song song;
    @ManyToOne
    @JoinColumn(name = "singer_id", referencedColumnName = "singer_id", insertable = false, updatable = false)
    private Singer singer;

    // Getters and Setters

    public Singer getSinger() {
        return singer;
    }

    public void setSinger(Singer singer) {
        this.singer = singer;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public Integer getPerformanceId() {
        return performanceId;
    }

    public void setPerformanceId(Integer performanceId) {
        this.performanceId = performanceId;
    }

    public Integer getSingerId() {
        return singerId;
    }

    public void setSingerId(Integer singerId) {
        this.singerId = singerId;
    }

    public Integer getSongId() {
        return songId;
    }

    public void setSongId(Integer songId) {
        this.songId = songId;
    }

    public LocalDateTime getPerformanceDay() {
        return performanceDay;
    }

    public void setPerformanceDay(LocalDateTime performanceDay) {
        this.performanceDay = performanceDay;
    }

    public String getPerformanceAddress() {
        return performanceAddress;
    }

    public void setPerformanceAddress(String performanceAddress) {
        this.performanceAddress = performanceAddress;
    }
}
