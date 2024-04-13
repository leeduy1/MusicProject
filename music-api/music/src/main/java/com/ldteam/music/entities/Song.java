package com.ldteam.music.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "song_id")
    private Integer songId;

    @Column(name = "song_name", nullable = false)
    private String songName;

    @Column(name = "author_id", nullable = false)
    private Integer authorId;

    @Column(name = "song_duration", nullable = false)
    private Float songDuration;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", referencedColumnName = "author_id", insertable = false, updatable = false)
    private Author author;

    @OneToMany()
    private List<Performance> performances;

    @OneToMany(mappedBy = "song")
    private List<AlbumSong> albumSongs;

    @OneToMany(mappedBy = "song")
    private List<SongGenre> songGenres;

    // Getters and Setters

    public List<SongGenre> getSongGenres() {
        return songGenres;
    }

    public void setSongGenres(List<SongGenre> songGenres) {
        this.songGenres = songGenres;
    }

    public Integer getSongId() {
        return songId;
    }

    public void setSongId(Integer songId) {
        this.songId = songId;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public Float getSongDuration() {
        return songDuration;
    }

    public void setSongDuration(Float songDuration) {
        this.songDuration = songDuration;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public List<Performance> getPerformances() {
        return performances;
    }

    public void setPerformances(List<Performance> performances) {
        this.performances = performances;
    }

    public List<AlbumSong> getAlbumSongs() {
        return albumSongs;
    }

    public void setAlbumSongs(List<AlbumSong> albumSongs) {
        this.albumSongs = albumSongs;
    }
}
