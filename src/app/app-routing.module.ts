import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SummaryComponent } from './summary/summary.component';
import { Word1Component } from './word1/word1.component';
import { Word2Component } from './word2/word2.component';
import { Word3Component } from './word3/word3.component';
import { Word4Component } from './word4/word4.component';
import { Word5Component } from './word5/word5.component';


const routes: Routes = [
  { path: '', redirectTo: "/mainpage", pathMatch: "full" },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'word1', component: Word1Component },
  { path: 'word2', component: Word2Component },
  { path: 'word3', component: Word3Component },
  { path: 'word4', component: Word4Component },
  { path: 'word5', component: Word5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
