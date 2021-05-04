import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import config from '../../configuration'

@Component({
    selector: 'app-profile-menu',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {

    @Input() user: User
    public isVisible: boolean = false
    public avatar: string = 'default_user.png'

    constructor(
        private eRef: ElementRef
    ) {}

    ngOnInit(): void {}

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.isVisible = false;
        }
    }

    public onMenuClick () {
        this.isVisible = !this.isVisible
    }

    get config () {
        return config
    }
}
