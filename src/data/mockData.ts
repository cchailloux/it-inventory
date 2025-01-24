import { DeviceInventory } from "./types";

// *really* cheap mock data
export const inventory: DeviceInventory[] = [
  {
    computerName: 'Computer1',
    dateOfPurchase: new Date('2020-01-01'),
    priceOfPurchase: 1000,
    annualElectricalConsumption: 200
  },
  {
    computerName: 'Computer2',
    dateOfPurchase: new Date('2021-06-15'),
    priceOfPurchase: 1500,
    annualElectricalConsumption: 250
  },
    {
    computerName: 'Computer3',
    dateOfPurchase: new Date('2021-06-15'),
    priceOfPurchase: 2000,
    annualElectricalConsumption: 223
  },
    {
    computerName: 'Computer4',
    dateOfPurchase: new Date('2024-01-21'),
    priceOfPurchase: 1000.12,
    annualElectricalConsumption: 400
  },
      {
    computerName: 'Computer5',
    dateOfPurchase: new Date('2023-01-21'),
    priceOfPurchase: 1234,
    annualElectricalConsumption: 123
  }
];
