import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';
import { QueueService } from './queue.service';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {

    private _queue: Subject<Array<Song>> = new Subject<Array<Song>>()
    private currentTrack: Song

    constructor() {}

    get queue () {
        return this._queue
    }

    set queue (queue: Subject<Array<Song>>) {
        this._queue = queue
    }
}
