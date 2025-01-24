export interface DeviceInventory {
  computerName: string;
  dateOfPurchase: Date;
  priceOfPurchase: number; // in Euros
  annualElectricalConsumption: number; // in kWh
}