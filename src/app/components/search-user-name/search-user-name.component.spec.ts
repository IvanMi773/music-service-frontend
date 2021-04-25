import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserNameComponent } from './search-user-name.component';

describe('SearchUserNameComponent', () => {
  let component: SearchUserNameComponent;
  let fixture: ComponentFixture<SearchUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
