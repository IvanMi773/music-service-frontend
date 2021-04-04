import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    public searchForm;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            'searchQuery': ['', [Validators.required]]
        })
    }

    public search () {
        this.router.navigateByUrl('/search/' + this.searchForm.get('searchQuery').value)
    }
}
