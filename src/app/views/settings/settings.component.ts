import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

    //TODO: change language

    private _user: User

    constructor(
        private userService: UserService,
        private tokenStorage: TokenStorageService,
        private router: Router
    ) {}

    ngOnInit(): void {
        //TODO: передати в пропси форми редагування
        this.userService.getProfileByUsername(this.tokenStorage.getUsername()).subscribe((data: User) => this._user = data)
    }

    public deleteAccount () {
        if (confirm('Are you shure you want to delete account?')) {
            this.userService.delete(this.tokenStorage.getUsername()).subscribe(data => {
                console.log(data)
                this.tokenStorage.signOut()
                this.router.navigateByUrl('/')
            })
        }
    }

    get user () {
        return this._user
    }
}
