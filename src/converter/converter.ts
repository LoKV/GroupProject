import { UnitEnum, UnitFactory } from './index';

export class Converter {
  static convert(value: number, unitFrom: UnitEnum, unitTo: UnitEnum) {
    const UnitFrom = UnitFactory.getInstance(unitFrom);
    const UnitTo = UnitFactory.getInstance(unitTo);
    return value * UnitTo.weight / UnitFrom.weight;
  }
}
