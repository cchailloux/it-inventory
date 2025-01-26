import { DeviceInventory } from '../src/data/types';
import { electricityRecapByMonth, generateYearMonthPairs } from '../src/electricity';

const devices: DeviceInventory[] = [
    {
        computerName: 'Computer1',
        dateOfPurchase: new Date('2024-12-01'),
        priceOfPurchase: 1000,
        annualElectricalConsumption: 1800
     },
    {
        computerName: 'Computer2',
        dateOfPurchase: new Date('2024-11-15'),
        priceOfPurchase: 1500,
        annualElectricalConsumption: 1203
    }
];

const startDate = new Date('2024-10-15');
const limitDate = new Date('2024-12-31'); 

describe('generateYearMonthPairs', () => {
    it('should generate Year-Month pairs on the format YYYY-MM', () => {
        const result = generateYearMonthPairs(startDate, limitDate);
        expect(result).toEqual(["2024-10", "2024-11", "2024-12"]);
    });
});

describe('electricityRecapByMonth', () => {
    it('should calculate the rounded monthly consumption until now', () => {
        const result = electricityRecapByMonth(devices, true);
        expect(result).toEqual({
            '2024-11': 100,
            '2024-12': 250,
            '2025-01': 250,
        });
    });

    it('should calculate the exact monthly consumption until now', () => {
        const result = electricityRecapByMonth(devices);
        expect(result).toEqual({
            '2024-11': 100.25,
            '2024-12': 250.25,
            '2025-01': 250.25,
        });
    });

    it('should calculate the rounded monthly consumption until specified date', () => {
        const result = electricityRecapByMonth(devices, true, limitDate);
        expect(result).toEqual({
            '2024-11': 100,
            '2024-12': 250,
        });
    });

    it('should calculate the exact monthly consumption until specified date', () => {
        const result = electricityRecapByMonth(devices, undefined, limitDate);
        expect(result).toEqual({
            '2024-11': 100.25,
            '2024-12': 250.25,
        });
    });
});