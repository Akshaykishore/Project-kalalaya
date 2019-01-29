import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRevampComponent } from './gallery-revamp.component';

describe('GalleryRevampComponent', () => {
  let component: GalleryRevampComponent;
  let fixture: ComponentFixture<GalleryRevampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryRevampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryRevampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
