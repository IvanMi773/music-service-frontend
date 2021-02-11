import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClientService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        this.httpClient
            .loginRequest(this.username.value, this.password.value)
			.subscribe(
				data => console.log(data),
				error => console.log(error)
			)
    }
}
