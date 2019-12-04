import { Pipe, Injectable, PipeTransform } from '@angular/core';

import { Converter, ConverterHelper, UnitFactory, UnitEnum } from '../../../converter/index';
// import { unitTo, result } from '.';

interface IConvert {
    calcResult: any;
}

@Pipe({ name: 'converterPipe' })
@Injectable()
export class ConverterPipe implements PipeTransform {

    conversionsArray: Array<IConvert> = [];

    transform(units: number, unitCodeFrom: number, unitCodeTo: number, decimals: number = 2): string {
        if (this.checkValidParams(units, unitCodeFrom, unitCodeTo)) {
            const unitFrom = UnitFactory.getInstance(unitCodeFrom);
            const unitTo = UnitFactory.getInstance(unitCodeTo);
            const result = Converter.convert(units, unitFrom.code, unitTo.code);
            this.conversionsArray.unshift({
                calcResult: `${ConverterHelper.round(result, decimals)} ${unitTo.friendlyName}`
            });
            console.log(this.conversionsArray);
            return `${ConverterHelper.round(result, decimals)} ${unitTo.friendlyName}`;
        }
        return '';
    }

    private checkValidParams(value: number, unitCodeFrom: UnitEnum, unitCodeTo: UnitEnum): boolean {
        return value > 0 && unitCodeFrom >= 0 && unitCodeTo >= 0;
    }
}
