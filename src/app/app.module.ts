import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Word1Component } from './word1/word1.component';
import { Word2Component } from './word2/word2.component';
import { Word3Component } from './word3/word3.component';
import { Word4Component } from './word4/word4.component';
import { Word5Component } from './word5/word5.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Word1Component,
    Word2Component,
    Word3Component,
    Word4Component,
    Word5Component,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
