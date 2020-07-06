import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word2',
  templateUrl: './word2.component.html',
  styleUrls: ['./word2.component.scss']
})
export class Word2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkAnswer2(word) {
    word === 'patrzy' ? this.router.navigate(['/word3']) : null;
  }
}
