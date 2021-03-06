import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import config from '../../configuration';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    public registerForm;
	@Output() onLoggedIn = new EventEmitter<boolean>();

    constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private tokenStorage: TokenStorageService,
		private router: Router
	) {}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            username: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.usernameMinLength),
                ],
            ],
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.passwordMinLength),
                ],
            ],
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
        });
    }

    public onSubmit() {
        this.userService
            .register(this.username.value, this.password.value, this.firstName.value, this.lastName.value, this.email.value)
            .subscribe(
                (data) => {
                    this.tokenStorage.signOut()

					localStorage.setItem(this.tokenStorage.tokenKey, data.token)
                    localStorage.setItem(this.tokenStorage.usernameKey, this.username.value)
                    
					this.setOnLoggedIn()
                    this.router.navigateByUrl('/');
                },
                (error) => console.log(error)
            );
    }

	setOnLoggedIn(){
		this.onLoggedIn.emit(true);
	}

    get username() {
        return this.registerForm.get('username');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get firstName() {
        return this.registerForm.get('firstName');
    }
    get lastName() {
        return this.registerForm.get('lastName');
    }
    get usernameMinLength() {
        return config.validators.usernameMinLength;
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
