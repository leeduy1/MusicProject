package com.ldteam.music.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "AlbumSong")
public class AlbumSong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_song_id")
    private Integer albumSongId;

    // Khóa ngoại đến bảng Album
    @ManyToOne
    @JoinColumn(name = "album_id", referencedColumnName = "album_id", nullable = false)
    private Album album;

    // Khóa ngoại đến bảng Song
    @ManyToOne
    @JoinColumn(name = "song_id", referencedColumnName = "song_id", nullable = false)
    private Song song;

    @Column(name = "track_number", nullable = false)
    private Integer trackNumber;

    public Integer getAlbumSongId() {
        return albumSongId;
    }

    public void setAlbumSongId(Integer albumSongId) {
        this.albumSongId = albumSongId;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public Integer getTrackNumber() {
        return trackNumber;
    }

    public void setTrackNumber(Integer trackNumber) {
        this.trackNumber = trackNumber;
    }

    // Getters and Setters
}
