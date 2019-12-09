import { Component, OnInit } from '@angular/core';
import { IUnit, Yard, Meter, Inch } from '../../converter/index';
import { Converter, ConverterHelper, UnitFactory, UnitEnum } from '../../converter/index';

interface IConvert {
  calcResult: any;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  conversionsArray: Array<IConvert> = [];

  constructor() { }

  readonly selectDefaultValue = -1;

  UnitInput: number;
  fromDD: number;
  toDD: number;

  unitsFromDD: IUnit[];
  unitsToDD: IUnit[];

  conversionArray: IConvert[];

  ngOnInit() {
    this.unitsFromDD = this.restoreOptions();
    this.unitsToDD = this.restoreOptions();
    this.fromDD = this.selectDefaultValue;
    this.toDD = this.selectDefaultValue;
    const conversions = JSON.parse(localStorage.getItem('conversionsArray'));
    this.conversionsArray = conversions;
    return conversions;
  }
  updateUnitsToDropDown(selectedCode: number): void {
    this.unitsToDD = this.restoreOptions();
    const index = this.unitsToDD.findIndex((unit) => unit.code === selectedCode);
    this.restoreOptionSelectIfSelected(selectedCode);
    this.removeOptionSelect(index);
  }

  randomNumber() {
    const rnd = (Math.ceil((Math.random() * 1000)));
    const inputValue = (document.getElementById('tb') as unknown as HTMLInputElement).value;
    const result = Converter.convert(rnd, this.fromDD, this.toDD);
    console.log('asdfaasd', result);
    this.UnitInput = result;
  }

  saveConversion() {
    const decimals = 2;
    const result = Converter.convert(this.UnitInput, this.fromDD, this.toDD);
    this.conversionsArray.unshift(({
      calcResult: `${ConverterHelper.round(result, decimals)}`
    }));

    localStorage.setItem('conversionsArray', JSON.stringify(this.conversionsArray));
  }

  deleteConversion(index: number) {
    this.conversionsArray.splice(index, 1);
    localStorage.setItem('conversionsArray', JSON.stringify(this.conversionsArray));
  }

  parseStringToInteger(value: string): number {
    return parseInt(value[0], 10);
  }

  private restoreOptionSelectIfSelected(selectedCode: number): void {
    if (this.toDD === selectedCode) {
      this.toDD = this.selectDefaultValue;
    }
  }

  private restoreToUnitSelect() {
    this.unitsToDD = this.restoreOptions();
  }

  private removeOptionSelect(index: number): void {
    this.unitsToDD.splice(index, 1);
  }

  private restoreOptions(): IUnit[] {
    return [new Yard(), new Meter(), new Inch()];
  }
}




