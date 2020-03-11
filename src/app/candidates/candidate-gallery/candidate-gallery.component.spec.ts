import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateGalleryComponent } from './candidate-gallery.component';

describe('CandidateGalleryComponent', () => {
  let component: CandidateGalleryComponent;
  let fixture: ComponentFixture<CandidateGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
