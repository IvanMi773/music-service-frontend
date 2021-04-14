import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

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
