package com.ldteam.music.entities;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "Genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "genre_id")
    private Integer genreId;

    @Column(name = "genre_name", nullable = false)
    private String genreName;

    @OneToMany(mappedBy = "genre")
    private List<SongGenre> songGenres;
    
    
    // Getters and Setters

    public List<SongGenre> getSongGenres() {
        return songGenres;
    }

    public void setSongGenres(List<SongGenre> songGenres) {
        this.songGenres = songGenres;
    }

    public Integer getGenreId() {
        return genreId;
    }

    public void setGenreId(Integer genreId) {
        this.genreId = genreId;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }
}
