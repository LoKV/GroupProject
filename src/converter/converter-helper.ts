export class ConverterHelper {
    static round(value: number, decimals: number = 3): number {
        return parseFloat(value.toFixed(decimals));
    }
}
