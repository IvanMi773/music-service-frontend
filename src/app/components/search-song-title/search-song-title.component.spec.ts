import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSongTitleComponent } from './search-song-title.component';

describe('SearchSongTitleComponent', () => {
  let component: SearchSongTitleComponent;
  let fixture: ComponentFixture<SearchSongTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSongTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSongTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
