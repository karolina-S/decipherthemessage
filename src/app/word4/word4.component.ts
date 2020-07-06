import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word4',
  templateUrl: './word4.component.html',
  styleUrls: ['./word4.component.scss']
})
export class Word4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  checkAnswer4(word) {
    word === 'nie' ? this.router.navigate(['/word5']) : null;
  }
}
