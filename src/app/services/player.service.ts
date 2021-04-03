import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {

    private _queue: Subject<Array<Song>> = new Subject<Array<Song>>()

    constructor() {}

    // public saveToLocalStorage () {
    //     this.queue.subscribe((songs: Array<Song>) => {
    //         console.log(songs)
    //         localStorage.setItem('queue', JSON.stringify(songs))
    //     })
    // }

    // public getFromLocalStorage () {
    //     return JSON.parse(localStorage.getItem('queue'))
    // }

    get queue () {
        return this._queue
    }

    set queue (queue: Subject<Array<Song>>) {
        this._queue = queue
    }
}
