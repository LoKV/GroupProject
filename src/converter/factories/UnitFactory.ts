import { IUnit, UnitEnum } from '../index';
import { Yard, Meter, Inch } from '../index';

export class UnitFactory {
    public static getInstance(unitEnum: UnitEnum): IUnit {
        switch (unitEnum) {
            case UnitEnum.Yard:
                return new Yard();
            case UnitEnum.Meter:
                return new Meter();
            case UnitEnum.Inch:
                return new Inch();
        }
    }
}
