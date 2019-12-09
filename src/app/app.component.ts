import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { bindCallback } from 'rxjs';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LengthConversion';
}
// export class AppComponent implements AfterViewInit {
//   constructor(private elementRef: ElementRef){

//   }
//   ngAfterViewInit(){
//     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
//  }
// }
