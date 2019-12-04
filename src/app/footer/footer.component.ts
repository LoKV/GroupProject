import { Component, OnInit } from '@angular/core';
// import { result, unitTo } from '../shared/pipes/converter.pipe';
interface IConvert {
  targetUnit: string;
  calcResult: number;
  // editMode: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  conversionsArray: Array<IConvert> = [];

  constructor() { }

  ngOnInit() {
    this.conversionsArray = [
      {
        // baseUnit: 'Yards',
        // number: 1,
        targetUnit: 'Feet',
        calcResult: 3,
        // editMode: false
      }
    ];
  }
}
