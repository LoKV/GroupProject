import { Component, OnInit } from '@angular/core';
import { IUnit, Yard, Meter, Inch } from '../../converter/index';

// import { ConverterPipe } from '../shared/pipes/converter.pipe';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  readonly selectDefaultValue = -1;

  UnitInput: number;
  fromDD: number;
  toDD: number;

  unitsFromDD: IUnit[];
  unitsToDD: IUnit[];

  // unitResult: ConverterPipe;

  ngOnInit() {
    this.unitsFromDD = this.restoreOptions();
    this.unitsToDD = this.restoreOptions();
    this.fromDD = this.selectDefaultValue;
    this.toDD = this.selectDefaultValue;
  }
  updateUnitsToDropDown(selectedCode: number): void {
    this.unitsToDD = this.restoreOptions();
    const index = this.unitsToDD.findIndex((unit) => unit.code === selectedCode);
    this.restoreOptionSelectIfSelected(selectedCode);
    this.removeOptionSelect(index);
  }

  reverse() {
    if (this.fromDD >= 0 && this.toDD >= 0) {
      const from = this.fromDD;
      const to = this.toDD;
      this.restoreToUnitSelect();
      this.fromDD = to;
      this.toDD = from;
    }
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




