import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {

    private _user: User

    constructor() {}

    ngOnInit(): void {
        
    }

    get user () {
        return this._user
    }

    @Input() set user (user: User) {
        this._user = user
    }
}
