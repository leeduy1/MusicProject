package com.ldteam.music.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "SongGenre")
public class SongGenre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id", nullable = false)
    private Song song;

    @ManyToOne
    @JoinColumn(name = "genre_id", referencedColumnName = "genre_id", nullable = false)
    private Genre genre;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    // Getters and Setters
}
