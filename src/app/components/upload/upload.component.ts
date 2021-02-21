import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SongUploadService } from 'src/app/services/song-upload.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

    public songForm
    private fileToUpload: File

    constructor(
        private formBuilder: FormBuilder,
        private songUpload: SongUploadService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.songForm = this.formBuilder.group({
            files: [null, [Validators.required]],
        });
    }

    onFileChange(event) {
        this.fileToUpload = event.target.files[0]
      }

	onSubmit() {
        const formData: FormData = new FormData()
        formData.append('playlistId', '1')
        formData.append('name', 'ads')
        formData.append('file', this.fileToUpload, this.fileToUpload.name)
        formData.append('genre', 'fds')

        this.songUpload.upload(formData).subscribe(data => console.log(data), err => console.log(err))
    }
}
