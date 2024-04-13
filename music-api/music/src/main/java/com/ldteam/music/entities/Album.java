package com.ldteam.music.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Album")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_id")
    private Integer albumId;

    @Column(name = "album_name", nullable = false)
    private String albumName;

    @Column(name = "album_info")
    private String albumInfo;

    // Khóa ngoại đến bảng AlbumSong
    @OneToMany(mappedBy = "album")
    private List<AlbumSong> albumSongs;

    // Khóa ngoại đến bảng AlbumSinger
    @OneToMany(mappedBy = "album")
    private List<AlbumSinger> albumSingers;

    public List<AlbumSong> getAlbumSongs() {
        return albumSongs;
    }

    public void setAlbumSongs(List<AlbumSong> albumSongs) {
        this.albumSongs = albumSongs;
    }

    public List<AlbumSinger> getAlbumSingers() {
        return albumSingers;
    }

    public void setAlbumSingers(List<AlbumSinger> albumSingers) {
        this.albumSingers = albumSingers;
    }

    // Getters and Setters

    public Integer getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Integer albumId) {
        this.albumId = albumId;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getAlbumInfo() {
        return albumInfo;
    }

    public void setAlbumInfo(String albumInfo) {
        this.albumInfo = albumInfo;
    }
}
