import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  constructor(e: ElementRef) { 
    // 重启服务器
    console.log(e);
    let input = e.nativeElement;  // 指令绑定在input标签上。
    input.focus();                
  }
}
