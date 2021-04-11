import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    title = 'music-service-frontend'
	private _loggedIn: Boolean = false
    private _user: User;

	constructor(
		private userService: UserService,
		private tokenStorage: TokenStorageService
	) {}

	ngOnInit () {
		this.showContext()

        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => this.user = data)
	}

	ngDoCheck (): void {
		this.showContext()
	}

	public showContext() {
		this.loggedIn = !!this.tokenStorage.getToken()
	}

	changeLoggedIn(val: boolean) {
		this.loggedIn = val;
	}

	get loggedIn () {
		return this._loggedIn
	}
	set loggedIn (loggedIn: Boolean) {
		this._loggedIn = loggedIn
	}
    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }
}
