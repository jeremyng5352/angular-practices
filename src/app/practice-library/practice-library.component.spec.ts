import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeLibraryComponent } from './practice-library.component';

describe('PracticeLibraryComponent', () => {
  let component: PracticeLibraryComponent;
  let fixture: ComponentFixture<PracticeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
