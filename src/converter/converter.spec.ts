import { Converter, UnitEnum, ConverterHelper } from './index';

describe('Converter Lib', () => {

  it('converts from meters to yards', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Meter, UnitEnum.Yard));
    const result2 = ConverterHelper.round(Converter.convert(100, UnitEnum.Meter, UnitEnum.Yard));
    const result3 = ConverterHelper.round(Converter.convert(1000, UnitEnum.Meter, UnitEnum.Yard));
    const result4 = ConverterHelper.round(Converter.convert(99999, UnitEnum.Meter, UnitEnum.Yard));

    expect(result1).toBe(1.094);
    expect(result2).toBe(109.361);
    expect(result3).toBe(1093.613);
    expect(result4).toBe(109360.236);
  });

  it('converts from yards to meters', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Yard, UnitEnum.Meter));
    const result2 = ConverterHelper.round(Converter.convert(100, UnitEnum.Yard, UnitEnum.Meter));
    const result3 = ConverterHelper.round(Converter.convert(1000, UnitEnum.Yard, UnitEnum.Meter));
    const result4 = ConverterHelper.round(Converter.convert(99999, UnitEnum.Yard, UnitEnum.Meter));

    expect(result1).toBe(0.914);
    expect(result2).toBe(91.44);
    expect(result3).toBe(914.4);
    expect(result4).toBe(91439.086);
  });

  it('converts from meters to inches', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Meter, UnitEnum.Inch));
    const result2 = ConverterHelper.round(Converter.convert(33, UnitEnum.Meter, UnitEnum.Inch));
    const result3 = ConverterHelper.round(Converter.convert(750.33, UnitEnum.Meter, UnitEnum.Inch));
    const result4 = ConverterHelper.round(Converter.convert(99999, UnitEnum.Meter, UnitEnum.Inch));

    expect(result1).toBe(39.370);
    expect(result2).toBe(1299.213);
    expect(result3).toBe(29540.551);
    expect(result4).toBe(3936968.504);
  });

  it('converts from inches to meters', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Inch, UnitEnum.Meter));
    const result2 = ConverterHelper.round(Converter.convert(33, UnitEnum.Inch, UnitEnum.Meter));
    const result3 = ConverterHelper.round(Converter.convert(750.33, UnitEnum.Inch, UnitEnum.Meter));
    const result4 = ConverterHelper.round(Converter.convert(99999, UnitEnum.Inch, UnitEnum.Meter));

    expect(result1).toBe(0.025);
    expect(result2).toBe(0.838);
    expect(result3).toBe(19.058);
    expect(result4).toBe(2539.975);
  });

  it('converts from yards to inches', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Yard, UnitEnum.Inch));
    const result2 = ConverterHelper.round(Converter.convert(17.45, UnitEnum.Yard, UnitEnum.Inch));
    const result3 = ConverterHelper.round(Converter.convert(566, UnitEnum.Yard, UnitEnum.Inch));
    const result4 = ConverterHelper.round(Converter.convert(99999, UnitEnum.Yard, UnitEnum.Inch));

    expect(result1).toBe(36);
    expect(result2).toBe(628.2);
    expect(result3).toBe(20376);
    expect(result4).toBe(3599964);
  });

  it('converts from inches to yards', () => {
    const result1 = ConverterHelper.round(Converter.convert(1, UnitEnum.Inch, UnitEnum.Yard));
    const result2 = ConverterHelper.round(Converter.convert(19.88, UnitEnum.Inch, UnitEnum.Yard));
    const result3 = ConverterHelper.round(Converter.convert(333.33, UnitEnum.Inch, UnitEnum.Yard));
    const result4 = ConverterHelper.round(Converter.convert(119911, UnitEnum.Inch, UnitEnum.Yard));

    expect(result1).toBe(0.028);
    expect(result2).toBe(0.552);
    expect(result3).toBe(9.259);
    expect(result4).toBe(3330.861);
  });
});
