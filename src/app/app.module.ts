import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeadlineComponent } from './headline/headline.component';
import { HeadlineService } from './headline/headline.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadlineComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HeadlineService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
