import { Component, EventEmitter, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistChooseDialogComponent } from '../playlist-choose-dialog/playlist-choose-dialog.component';

@Component({
    selector: 'app-song-menu',
    templateUrl: './song-menu.component.html',
    styleUrls: ['./song-menu.component.scss'],
})
export class SongMenuComponent implements OnInit {

    @Input() public displayAddToQueue: boolean = false
    @Input() public displayDelete: boolean = false
    @Input() public playlists: Array<Playlist>
    @Output() public onNeedToDelete = new EventEmitter<boolean>()
    @Output() public onNeedToAddToQuery = new EventEmitter<boolean>()
    @Output() public playlistId = new EventEmitter<number>()
    private _isVisible: boolean = false;

    constructor(
        private eRef: ElementRef,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    public menuVisible () {
        this.isVisible = !this.isVisible
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isVisible = false;
        }
    }

    public addToQueue () {
        this.onNeedToAddToQuery.emit(true)
        this.isVisible = false;
    }

    public deleteSong () {
        this.onNeedToDelete.emit(true)
        this.isVisible = false;
    }

    public openDialog () {
        const dialogRef = this.dialog.open(PlaylistChooseDialogComponent, {
            width: '250px',
            data: { playlists: this.playlists }
        })

        dialogRef.afterClosed().subscribe(result => {
            console.log(result)
            this.playlistId.emit(result)
        })
    }

    public get isVisible(): boolean {
        return this._isVisible;
    }
    public set isVisible(value: boolean) {
        this._isVisible = value;
    }
}
