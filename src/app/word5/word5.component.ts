import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word5',
  templateUrl: './word5.component.html',
  styleUrls: ['./word5.component.scss']
})
export class Word5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkAnswer5(word) {
    word === 'zapomina' ? this.router.navigate(['/summary']) : null;
  }

}
