package com.ldteam.music.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "AlbumSinger")
public class AlbumSinger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_singer_id")
    private Integer albumSingerId;

    // Khóa ngoại đến bảng Album
    @ManyToOne
    @JoinColumn(name = "album_id", referencedColumnName = "album_id", nullable = false)
    private Album album;

    // Khóa ngoại đến bảng Singer
    @ManyToOne
    @JoinColumn(name = "singer_id", referencedColumnName = "singer_id", nullable = false)
    private Singer singer;

    @Column(name = "role")
    private String role;

    public Integer getAlbumSingerId() {
        return albumSingerId;
    }

    public void setAlbumSingerId(Integer albumSingerId) {
        this.albumSingerId = albumSingerId;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Singer getSinger() {
        return singer;
    }

    public void setSinger(Singer singer) {
        this.singer = singer;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    // Getters and Setters
}
