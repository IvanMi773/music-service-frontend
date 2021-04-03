import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { PlayerService } from './player.service';

@Injectable({
    providedIn: 'root',
})
export class QueueService {

    private _queue: Array<Song>

    constructor(
        private playerService: PlayerService
    ) {
        this._queue = new Array<Song>()
        this._queue = JSON.parse(localStorage.getItem('queue'))
    }

    public subscribe () {
        this.playerService.queue.subscribe((value: Array<Song>) => {
            value.forEach(song => {
                this._queue.push(song)
                localStorage.setItem('queue', JSON.stringify(this._queue))
            })
        })
    }

    public removeFirstElementFromQueue () {
        this._queue.shift()
        localStorage.setItem('queue', JSON.stringify(this._queue))
    }

    public clearLocalstorage () {
        localStorage.setItem('queue', '[]')
    }

    get queue () {
        this._queue = JSON.parse(localStorage.getItem('queue'))
        return this._queue
    }

    set queue (queue: Array<Song>) {
        this._queue = queue
    }
}
