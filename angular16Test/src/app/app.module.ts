import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'  // 双向数据绑定
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01/myc01.component';
import { FocusDirective } from './focus.directive';
import { UpperDirective } from './upper.directive';
import { Myc02Component } from './myc02/myc02.component';
import { GenderPipe } from './gender.pipe';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    FocusDirective,
    UpperDirective,
    Myc02Component,
    GenderPipe,
    Myc03Component,
    Myc04Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule  // 注入数据绑定
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
