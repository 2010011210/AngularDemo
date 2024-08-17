import { Component, ViewChild } from '@angular/core';
import { Myc02Component } from './myc02/myc02.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild("myc02") abc:any;

  title = 'angular16Test';
  show01= true;

  change()
  {
    console.log(this.abc);
  }

  show(v:any)
  {
    console.log(v);
  }

}
