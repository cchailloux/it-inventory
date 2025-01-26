import { DeviceInventory } from '../src/data/types';
import { electricityRecapByMonth } from '../src/electricity';

const devices: DeviceInventory[] = [
    {
        computerName: 'Computer1',
        dateOfPurchase: new Date('2024-12-01'),
        priceOfPurchase: 1000,
        annualElectricalConsumption: 1203
     },
    {
        computerName: 'Computer2',
        dateOfPurchase: new Date('2024-11-15'),
        priceOfPurchase: 1500,
        annualElectricalConsumption: 1800
    }
];

describe('electricityRecapByMonth', () => {
    it('should calculate the rounded monthly consumption', () => {
    const result = electricityRecapByMonth(devices, true);
    expect(result).toEqual({
      '2024-11': 150,
      '2024-12': 250,
      '2025-01': 250,
    });
    });
    it('should calculate the exact monthly consumption', () => {
    const result = electricityRecapByMonth(devices);
    expect(result).toEqual({
      '2024-11': 150,
      '2024-12': 250.25,
      '2025-01': 250.25,
    });
  });
});