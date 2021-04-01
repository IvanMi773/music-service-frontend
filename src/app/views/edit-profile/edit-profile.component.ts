import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import config from '../../configuration';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

    public editForm
    private fileToUpload: File
    private _user: User

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router,
        private tokenStorage: TokenStorageService
    ) {}

    ngOnInit(): void {
        this.editForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            photo: ['', []],
            firstName: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.firstNameMinLength),
                ],
            ],
            lastName: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.lastNameMinLength),
                ],
            ],
        })

        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => this._user = data)
    }

    public onFileChange(event) {
        this.fileToUpload = event.target.files[0]
    }

    public onSubmit() {
        const formData: FormData = new FormData()
        formData.append('firstName', this.firstName.value)
        formData.append('lastName', this.lastName.value)
        formData.append('email', this.email.value)
        formData.append('avatar', this.fileToUpload)

        this.userService
            .updateUser(formData)
            .subscribe(data => {
                console.log(data)
                this.router.navigateByUrl('/settings')
            });
    }

    get user () {
        return this._user
    }

    get email() {
        return this.editForm.get('email');
    }

    get firstName() {
        return this.editForm.get('firstName');
    }

    get lastName() {
        return this.editForm.get('lastName');
    }

    get photo() {
        return this.editForm.get('photo');
    }

    get passwordMinLength() {
        return config.validators.passwordMinLength;
    }

    get firstNameMinLength() {
        return config.validators.firstNameMinLength;
    }

    get lastNameMinLength() {
        return config.validators.lastNameMinLength;
    }
}
