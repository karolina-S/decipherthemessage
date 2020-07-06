import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word5Component } from './word5.component';

describe('Word5Component', () => {
  let component: Word5Component;
  let fixture: ComponentFixture<Word5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
