import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word2Component } from './word2.component';

describe('Word2Component', () => {
  let component: Word2Component;
  let fixture: ComponentFixture<Word2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
