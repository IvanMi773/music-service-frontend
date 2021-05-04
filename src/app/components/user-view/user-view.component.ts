import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import config from '../../configuration'

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {

    private _user: User
    public meSubscribed: boolean = false

    constructor(
        private tokenStorage: TokenStorageService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService.getProfileByUsername(this.user.username).subscribe((data: User) => {
            this.user = data
            this.checkForSubscribing()
        })
    }

    public subscribe () {
        this.userService.subscribe(this.user.username).subscribe((data: User) => {
            this.user = data
            this.checkForSubscribing()
        }, err => console.log(err))
    }

    private checkForSubscribing () {
        this.meSubscribed = false
        this.user.subscribers.forEach(item => {
            if (item.username === this.currentUsername) {
                this.meSubscribed = true
            }
        })
    }

    get user () {
        return this._user
    }

    @Input() set user (user: User) {
        this._user = user
    }

    get currentUsername () {
        return this.tokenStorage.getUsername()
    }

    get config () {
        return config
    }
}
