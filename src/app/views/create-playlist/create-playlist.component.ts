import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-create-playlist',
    templateUrl: './create-playlist.component.html',
    styleUrls: ['./create-playlist.component.scss'],
})
export class CreatePlaylistComponent implements OnInit {

    public playlistForm;
    public fileToUpload: File

    constructor(
        private formBuilder: FormBuilder,
        private tokenStorage: TokenStorageService,
        private playlistService: PlaylistService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.playlistForm = this.formBuilder.group({
            title: ['', [ Validators.required, Validators.minLength(2) ]],
            files: [null, [Validators.required]],
        });
    }

    onSubmit () {
        const formData: FormData = new FormData()
        formData.append('username', this.tokenStorage.getUsername())
        formData.append('name', this.title.value)
        formData.append('photo', this.fileToUpload, this.fileToUpload.name)
        formData.append('state', '0')

        this.playlistService.createPlaylist(formData).subscribe(data => console.log(data))
        this.router.navigateByUrl('/profile/' + this.tokenStorage.getUsername())
    }

    onFileChange(event) {
        this.fileToUpload = event.target.files[0]
    }

    public get title () {
        return this.playlistForm.get('title')
    }

    public get files () {
        return this.playlistForm.get('files')
    }
}
