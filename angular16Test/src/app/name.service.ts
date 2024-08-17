import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  names = ["刘备","关于","张飞"];
  countries = ["魏","蜀","吴"]
  constructor() { }
}
