import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/models/song';
import { PlayerService } from 'src/app/services/player.service';

@Component({
    selector: 'app-music-track',
    templateUrl: './music-track.component.html',
    styleUrls: ['./music-track.component.scss'],
})
export class MusicTrackComponent implements OnInit {

    public playing = false
    @Input() song: Song
    @Input() currentTruck: string | undefined
    @Output() currentTruckChange = new EventEmitter<string>()

    constructor(
        private playerService: PlayerService
    ) {}

    ngOnInit(): void {
        this.playerService.queue.subscribe(value => {
            if (this.song.file === value[0].file) {
                this.playing = true
            } else {
                this.playing = false
            }
        })
    }

    public play () {
        // this.playerService.queue.subscribe(value => {
            // if (this.song.file !== value) {
            //     this.playing = false
            // }
        // })

        this.playerService.queue.next(new Array(this.song))
        // this.playing = !this.playing

        // if (!this.playing) {
            // this.playerService.queue.next('')
        // }
    }
}
