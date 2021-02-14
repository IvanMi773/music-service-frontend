import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import config from '../../configuration'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm
	@Output() onLoggedIn = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
		private tokenStorage: TokenStorageService,
		private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
            password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
        });
    }

	onSubmit() {
        this.userService
            .login(this.username.value, this.password.value)
			.subscribe(
				data => {
					localStorage.removeItem(this.tokenStorage.tokenKey)
					localStorage.setItem(this.tokenStorage.tokenKey, data.token)
					this.setOnLoggedIn()
					this.router.navigateByUrl('/');
				},
				error => console.log(error)
			)
    }

	setOnLoggedIn(){
		this.onLoggedIn.emit(true);
	}

    get username() {
        return this.loginForm.get('username')
    }
    get password() {
        return this.loginForm.get('password')
    }
	get usernameMinLength() {
        return config.validators.usernameMinLength
    }
    get passwordMinLength() {
        return config.validators.passwordMinLength
    }
}
