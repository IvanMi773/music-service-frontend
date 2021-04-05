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
	private _clicked: Boolean = false
	private _loggedIn: Boolean = false
    private _avatar: string = 'default_user.png'

	constructor(
		private userService: UserService,
		private tokenStorage: TokenStorageService
	) {}

	ngOnInit () {
		this.showContext()

        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => this._avatar = data.avatar)
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

	public onMenuClick () {
		this.clicked = !this.clicked

		let element = document.getElementsByClassName('menu-button')[0]

		if (this.clicked) {
			element.classList.remove('transform', 'opacity-0', 'scale-95')
			element.classList.add('transform', 'opacity-100', 'scale-100')
		} else {
			element.classList.add('transform', 'opacity-0', 'scale-95')
			element.classList.remove('transform', 'opacity-100', 'scale-100')
		}
	}

    get avatar () {
        return this._avatar
    }

    get username () {
        return this.tokenStorage.getUsername()
    }

    get role () {
        return this.tokenStorage.getRole()
    }

	get clicked () {
		return this._clicked
	}
	get loggedIn () {
		return this._loggedIn
	}
	set clicked (clicked: Boolean) {
		this._clicked = clicked
	}
	set loggedIn (loggedIn: Boolean) {
		this._loggedIn = loggedIn
	}
}
