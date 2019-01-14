import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeIComponent } from './practice-i.component';

describe('PracticeIComponent', () => {
  let component: PracticeIComponent;
  let fixture: ComponentFixture<PracticeIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
