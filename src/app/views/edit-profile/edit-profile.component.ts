import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import config from '../../configuration';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

    public editForm

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.editForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
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
    }

    public onSubmit() {
        this.userService
            .updateUser(this.firstName.value, this.lastName.value, this.email.value)
            .subscribe(data => {
                console.log(data)
                this.router.navigateByUrl('/settings')
            });
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
