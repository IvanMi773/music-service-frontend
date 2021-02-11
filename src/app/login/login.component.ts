import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	public loginForm

    constructor(
		private formBuilder: FormBuilder
	) {}

    ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', [ Validators.required, Validators.email ]],
			password: ['', [ Validators.required, Validators.minLength(8) ]]
		})
	}

	get email() { return this.loginForm.get('email'); }
	get password() { return this.loginForm.get('password'); }

	onSubmit () {
		console.log(this.loginForm.value)
	}
}
