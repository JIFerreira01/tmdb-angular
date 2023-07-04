import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAnnouncementsComponent } from './c-announcements.component';

describe('CAnnouncementsComponent', () => {
  let component: CAnnouncementsComponent;
  let fixture: ComponentFixture<CAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
