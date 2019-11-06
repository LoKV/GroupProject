import { IUnit, UnitEnum } from '../index';
export class Inch implements IUnit {

  public readonly name: string;
  public readonly friendlyName: string;
  public readonly code: UnitEnum;
  public readonly weight: number;

  constructor() {
    this.name = 'Inch';
    this.friendlyName = 'in';
    this.code = UnitEnum.Inch;
    this.weight = 39.370078740157481434;
  }
}
