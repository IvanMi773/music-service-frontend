import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSongGenreComponent } from './search-song-genre.component';

describe('SearchSongGenreComponent', () => {
  let component: SearchSongGenreComponent;
  let fixture: ComponentFixture<SearchSongGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSongGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSongGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
