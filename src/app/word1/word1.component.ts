import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word1',
  templateUrl: './word1.component.html',
  styleUrls: ['./word1.component.scss']
})
export class Word1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animate(square) {
    square.classList.add('active');
    setTimeout(function () { square.classList.remove('active') }, 5500)
  }

  checkAnswer(word) {
    word === 'legion' ? this.router.navigate(['/word2']) : null;
  }
}
