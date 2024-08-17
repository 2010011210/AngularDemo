import { Component,OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrl: './myc02.component.css'
})
export class Myc02Component implements OnInit {

  names = ['赵云',"吕布"];
  //show01 = true;
  workers=[
    {name:"张三", age : 24, sex : 1},
    {name:"李四", age : 24, sex : 1},
    {name:"李美丽", age : 24, sex : 0},
  ]

  constructor(public nameS: NameService) 
  {
    console.log("constructor");

  }
  ngOnInit(): void 
  {
    console.log("init:初始化");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit:初始化后执行");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit:页面初始化后执行");
  }


  // 页面监控，有变化的时候
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked:组件的数据发生变化的时候");
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked:组件的UI随着数据发生变化的时候");
  }


 // 销毁
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy");
  }

}
