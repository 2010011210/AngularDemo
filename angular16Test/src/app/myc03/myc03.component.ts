import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NameService } from '../name.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrl: './myc03.component.css'
})
export class Myc03Component implements OnInit {
  // 父传子
  @Input() name: string | undefined;
  @Input()
  age!: number;

  @Input()
  boos!: Boos;

  // 子传父
  @Output() msgEvent2 = new EventEmitter();

  constructor(public nameS: NameService, public companyS:CompanyService){  //, companyS:CompanyService
  }

  ngOnInit(): void {
   
  }

  returnToFather()
  {
    this.msgEvent2.emit(this.name)
  }
}

interface Boos
{
  name: string,
  age:number,
  sex: string
}
