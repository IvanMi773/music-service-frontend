import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-red-button',
    templateUrl: './red-button.component.html',
    styleUrls: ['./red-button.component.scss'],
})
export class RedButtonComponent implements OnInit {

    private _text: string;

    constructor() {}

    ngOnInit(): void {}

    public get text(): string {
        return this._text;
    }

    @Input()
    public set text(value: string) {
        this._text = value;
    }
}
