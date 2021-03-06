import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/models/song';
import { HomeService } from 'src/app/services/home.service';

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
        private homeService: HomeService
    ) {}

    ngOnInit(): void {}

    public play () {
        this.homeService.currentTruck.subscribe(value => {
            if (this.song.file !== value) {
                this.playing = false
            }
        })

        this.homeService.currentTruck.next(this.song.file)
        this.playing = !this.playing

        if (!this.playing) {
            this.homeService.currentTruck.next('')
        }
    }
}
