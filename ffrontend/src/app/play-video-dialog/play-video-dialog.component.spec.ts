import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoDialogComponent } from './play-video-dialog.component';

describe('PlayVideoDialogComponent', () => {
  let component: PlayVideoDialogComponent;
  let fixture: ComponentFixture<PlayVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
