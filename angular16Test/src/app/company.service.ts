import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyNames = ["小米","华为", "苹果"]
  constructor() { }
}
