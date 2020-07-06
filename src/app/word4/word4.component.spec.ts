import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word4Component } from './word4.component';

describe('Word4Component', () => {
  let component: Word4Component;
  let fixture: ComponentFixture<Word4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
