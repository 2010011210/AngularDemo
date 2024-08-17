import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrl: './myc04.component.css'
})
export class Myc04Component implements OnInit {
  constructor(public http: HttpClient){  //
   
  }

  a = `<ul>
    <li>张三</li>
    <li>李四</li>
    </ul>`

  ngOnInit(): void {
    console.log("开始");
    let address = '上海';
    let url = `https://localhost:7193/WeatherForecast?id=${address}`;
    this.http.get(url).subscribe(res => console.log(res));
  }
}
