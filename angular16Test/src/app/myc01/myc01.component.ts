import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrl: './myc01.component.css'
})

export class Myc01Component implements OnInit {

  names=["李白","杜甫","白居易"];
  name = 'Wangcong';
  age = 43;
  job = 'programmer';
  goodMan = true;

  address = {
    city: 'Shanghai',
    district: 'songjiang'
  };

  html = "<h1>我是html</h1>";
  size = 30;
  score = 80;
  type=1;

  time = new Date().getDate();

  showName()
  {
    return "我是对象中的方法";
  }

  showClick()
  {
    alert('点击事件');
  }

  minu()
  {
    this.size = this.size -1;
  }


  constructor() { }
  ngOnInit(): void { }
}
