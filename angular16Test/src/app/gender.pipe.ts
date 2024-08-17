import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
 // lang是可选参数，程序要自己定义
  transform(value: number, lang = "zh") {
    console.log(value);
    if(lang == "zh")
    {
      if(value == 0){ return "女";}
      if(value == 1){ return "男";}
    }

    if(lang == "en")
      {
        if(value == 0){ return "female";}
        if(value == 1){ return "male";}
      }
    return value;
  }

}
