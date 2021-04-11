import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistChooseDialogComponent } from './playlist-choose-dialog.component';

describe('PlaylistChooseDialogComponent', () => {
  let component: PlaylistChooseDialogComponent;
  let fixture: ComponentFixture<PlaylistChooseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistChooseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistChooseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
