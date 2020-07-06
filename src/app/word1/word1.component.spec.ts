import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word1Component } from './word1.component';

describe('Word1Component', () => {
  let component: Word1Component;
  let fixture: ComponentFixture<Word1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
