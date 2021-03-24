import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration'

@Injectable({
    providedIn: 'root',
})
export class SongService {

    constructor(
        private http: HttpClient
    ) {}

    public upload (formData: FormData) {
        return this.http.post(config.hostName + 'api/song', formData)
    }

    public getAllSongs () {
        return this.http.get(config.hostName + "api/song")
    }

    public getSongsByUsername (username: string) {
        return this.http.get(config.hostName + 'api/song/user/' + username)
    }

    public updateLikes (songId: number, username: string) {
        return this.http.put(config.hostName + 'api/song/updateLikes/' + songId, username)
    }

    public getLikes (songId: number, username: string) {
        return this.http.get(config.hostName + 'api/song/likes/' + songId + '/' + username)
    }
}

//TODO: display authorization errors
//TODO: wrong file validation errors
//TODO: form for upload songs [ drag & drop ]
//TODO: multiple files upload functional
//TODO: create button component
//TODO: loader for uploading songs
//TODO:
