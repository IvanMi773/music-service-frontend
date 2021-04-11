import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistChooseDialogData } from 'src/app/models/PlaylistChooseDialogData';

@Component({
    selector: 'app-playlist-choose-dialog',
    templateUrl: './playlist-choose-dialog.component.html',
    styleUrls: ['./playlist-choose-dialog.component.scss'],
})
export class PlaylistChooseDialogComponent {

    public playlistId: number

    constructor(
        public dialogRef: MatDialogRef<PlaylistChooseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PlaylistChooseDialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    public select (event: any, playlistId: number) {
        this.playlistId = playlistId
        console.log(this.playlistId)
    }
}
