import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    title = 'music-service-frontend';
	clicked: Boolean = false

	onMenuClick () {
		this.clicked = !this.clicked

		let element = document.getElementsByClassName('menu-button')[0];

		if (this.clicked) {
			element.classList.remove('transform', 'opacity-0', 'scale-95')
			element.classList.add('transform', 'opacity-100', 'scale-100')
		} else {
			element.classList.add('transform', 'opacity-0', 'scale-95')
			element.classList.remove('transform', 'opacity-100', 'scale-100')
		}
	}
}
