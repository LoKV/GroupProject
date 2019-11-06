import { IUnit, UnitEnum } from '../index';
export class Yard implements IUnit {
  public readonly name: string;
  public readonly friendlyName: string;
  public readonly code: UnitEnum;
  public readonly weight: number;

  constructor() {
    this.name = 'Yard';
    this.friendlyName = 'yd';
    this.code = UnitEnum.Yard;
    this.weight = 1.093613298337707817;
  }
}
