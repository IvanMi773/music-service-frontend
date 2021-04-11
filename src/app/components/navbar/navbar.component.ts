import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

	private _loggedIn: Boolean = false
    private _user: User;
    private _currentRoute: string

	constructor(
		private userService: UserService,
		private tokenStorage: TokenStorageService,
        private router: Router
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

    get currentRoute (): string {
        return this.router.url
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
