import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word3Component } from './word3.component';

describe('Word3Component', () => {
  let component: Word3Component;
  let fixture: ComponentFixture<Word3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
