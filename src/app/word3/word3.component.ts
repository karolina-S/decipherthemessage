import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word3',
  templateUrl: './word3.component.html',
  styleUrls: ['./word3.component.scss']
})
export class Word3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkAnswer3(word) {
    word === 'legion' ? this.router.navigate(['/word4']) : null;
  }

}
