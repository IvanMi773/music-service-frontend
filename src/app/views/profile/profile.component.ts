import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    private _openTab: number = 1
    private _songs: Array<Song>

    constructor(
        private tokenStorage: TokenStorageService,
        private songService: SongService
    ) {}

    //TODO: don't show [username] post a track on profile pages
    //TODO: when user don't have uploaded songs or playlists, show offer to create it

    ngOnInit(): void {}

    toggleTabs($tabNumber: number){
        this.openTab = $tabNumber;
    }

    public loadSongs () {
        this.songService.getSongsByUsername(this.username).subscribe((data: Array<Song>) => this._songs = data, err => console.log(err))
    }

    get username () {
        return this.tokenStorage.getUsername()
    }

    get openTab () {
        return this._openTab
    }

    set openTab (openTab: number) {
        this._openTab = openTab
    }

    get songs () {
        return this._songs
    }
}
