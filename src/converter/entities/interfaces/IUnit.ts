import { UnitEnum } from '../index';
export interface IUnit {
  name: string;
  friendlyName: string;
  code: UnitEnum;
  weight: number;
}
