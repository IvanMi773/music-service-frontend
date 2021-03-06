import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    private _currentTruck: Subject<string> = new Subject<string>()

    constructor() {}

    get currentTruck () {
        return this._currentTruck
    }

    set currentTruck (currentTruck: Subject<string>) {
        this._currentTruck = currentTruck
    }
}
