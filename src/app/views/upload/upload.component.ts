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
    private fileToUpload: File
    private isCustomGenre: boolean = false
    private _genres: any
    private genreId: string

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
        });

        //TODO: error handling
        this.genreService.getAllGenres().subscribe(data => this._genres = data, err => console.log(err))
    }

    onFileChange(event) {
        this.fileToUpload = event.target.files[0]
    }

    selectValueChangedEvent (value: string) {
        if (value === "1") {
            this.isCustomGenre = true
            this.songForm = this.formBuilder.group({
                title: [this.title.value, [ Validators.required, Validators.minLength(2) ]],
                genre: [this.genre.value, this.customGenre ? [ Validators.required ] : null],
                files: ['', [Validators.required]],
            });
        } else {
            this.isCustomGenre = false
            this.genreId = value
        }
    }

	async onSubmit() {
        //TODO: show exceptions
        //TODO: check if genre "none" selected
        //TODO: коли ми вибираємо кастомну категорію і вводимо назву категорії,
        // а потім вибираємо визначену категорію, то станеться помилка валідації
        //TODO: song cover
        
        if (this.isCustomGenre) {
            let promice: any = await this.genreService.createGenre(this.genre.value)
            this.genreId = promice.genreId
        }

        const formData: FormData = new FormData()
        formData.append('username', this.tokenStorage.getUsername())
        formData.append('title', this.title.value)
        formData.append('file', this.fileToUpload, this.fileToUpload.name)
        formData.append('genre', this.genreId)

        this.songService.upload(formData).subscribe(data => {
            console.log(data)
            this.router.navigateByUrl('/profile/' + this.tokenStorage.getUsername());
        }, err => console.log(err))
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

    get customGenre () {
        return this.isCustomGenre
    }

    get genres () {
        return this._genres
    }
}
