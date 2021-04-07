import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {

    private _queue: Subject<Array<Song>> = new Subject<Array<Song>>()
    private _clearQueue: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    get queue () {
        return this._queue
    }

    set queue (queue: Subject<Array<Song>>) {
        this._queue = queue
    }

    public get clearQueue(): Subject<boolean> {
        return this._clearQueue;
    }
    public set clearQueue(value: Subject<boolean>) {
        this._clearQueue = value;
    }
}
