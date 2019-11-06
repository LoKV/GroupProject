import { IUnit, UnitEnum } from '../index';
export class Meter implements IUnit {

  public readonly name: string;
  public readonly friendlyName: string;
  public readonly code: UnitEnum;
  public readonly weight: number;

  constructor() {
    this.name = 'Meter';
    this.friendlyName = 'm';
    this.code = UnitEnum.Meter;
    this.weight = 1.0;
  }
}
