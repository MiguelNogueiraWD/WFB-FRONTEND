import { Directive,ElementRef, HostListener } from '@angular/core';
/*
@Directive({
  standalone: true,
  selector: '[appBorderCard]',
})
export class BorderCardDirective {

  constructor(private el:ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse enter');
    this.setBorder('#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse leave');
    this.setBorder('#f5f5f5');
  }

  setHeight(height:number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color:string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
*/