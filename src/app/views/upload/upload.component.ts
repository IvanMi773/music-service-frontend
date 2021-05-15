import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreService } from 'src/app/services/genre.service';
import { SongService } from 'src/app/services/song.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

    public songForm
    private songFileToUpload: File
    private coverFileToUpload: File
    private isCustomGenre: boolean = false
    private _genres: any
    private genreId: string
    private _serverSongErrorResponse: any;
    private _genreNotSelectedError: boolean;
    private _genreAlreadyExcistsError: boolean;
    private selectedValue: number = -1;

    constructor(
        private formBuilder: FormBuilder,
        private songService: SongService,
        private tokenStorage: TokenStorageService,
        private genreService: GenreService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.songForm = this.formBuilder.group({
            title: ['', [ Validators.required, Validators.minLength(2) ]],
            genre: ['', this.customGenre ? [ Validators.required ] : null],
            files: [null, [Validators.required]],
            cover: [null, [Validators.required]],
        });

        //TODO: error handling
        this.genreService.getAllGenres().subscribe(data => this._genres = data, err => console.log(err))
    }

    onSongFileChange(event) {
        this.songFileToUpload = event.target.files[0]
    }

    onCoverFileChange(event) {
        this.coverFileToUpload = event.target.files[0]
    }

    selectValueChangedEvent (value: string) {
        this.selectedValue = parseInt(value)
        if (value === "-2") {
            this.isCustomGenre = true

            this.songForm = this.formBuilder.group({
                title: [this.title.value, [ Validators.required, Validators.minLength(2) ]],
                genre: [this.genre.value, this.customGenre ? [ Validators.required ] : null],
                files: [this.songFileToUpload.name, [Validators.required]],
                cover: [this.coverFileToUpload.name, [Validators.required]],
            });
        } else {
            this.isCustomGenre = false
            this.genreId = value

            this.songForm = this.formBuilder.group({
                title: [this.title.value, [ Validators.required, Validators.minLength(2) ]],
                genre: [this.genre.value, this.customGenre ? [ Validators.required ] : null],
                files: [this.songFileToUpload.name, [Validators.required]],
                cover: [this.coverFileToUpload.name, [Validators.required]],
            });
        }
    }

    // private reinitializeForm () {
    //     this.songForm = this.formBuilder.group({
    //         title: [this.title.value, [ Validators.required, Validators.minLength(2) ]],
    //         genre: [this.genre.value, this.customGenre ? [ Validators.required ] : null],
    //         files: [this.songFileToUpload.name, [Validators.required]],
    //         cover: [this.coverFileToUpload.name, [Validators.required]],
    //     });
    // }

	async onSubmit() {

        if (this.selectedValue !== -1) {
            if (this.isCustomGenre) {
                let promice: any = await this.genreService.createGenre(this.genre.value).catch(err => {
                    this.genreAlreadyExcistsError = true
                })
                this.genreId = promice.genreId
            }

            const formData: FormData = new FormData()
            formData.append('title', this.title.value)
            formData.append('file', this.songFileToUpload, this.songFileToUpload.name)
            formData.append('cover', this.coverFileToUpload, this.coverFileToUpload.name)
            formData.append('genre', this.genreId)

            this.songService.upload(formData).subscribe(data => {
                console.log(data)
                this.router.navigateByUrl('/profile/' + this.tokenStorage.getUsername());
            }, err => {
                console.log(err)
                this.serverSongErrorResponse = err
            })
        } else {
            this._genreNotSelectedError = true
        }
    }

    public get genreAlreadyExcistsError(): boolean {
        return this._genreAlreadyExcistsError;
    }
    public set genreAlreadyExcistsError(value: boolean) {
        this._genreAlreadyExcistsError = value;
    }

    get title () {
        return this.songForm.get('title')
    }

    get genre () {
        return this.songForm.get('genre')
    }

    get files () {
        return this.songForm.get('files')
    }

    get cover () {
        return this.songForm.get('cover')
    }

    get customGenre () {
        return this.isCustomGenre
    }

    get genreNotSelectedError () {
        return this._genreNotSelectedError
    }
    set genreNotSelectedError (value: any) {
        this._genreNotSelectedError = value
    }

    get genres () {
        return this._genres
    }
    public get serverSongErrorResponse(): any {
        return this._serverSongErrorResponse;
    }
    public set serverSongErrorResponse(value: any) {
        this._serverSongErrorResponse = value;
    }
}
