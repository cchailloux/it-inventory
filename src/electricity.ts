import { getAllDevices } from "./data/inventory";
import { DeviceInventory } from "./data/types";

export const generateYearMonthPairs = (startDate: Date, endDate: Date): string[] => {
  const yearMonthPairs: string[] = [];
  let currentDate = new Date(startDate);
  
  // early return to avoir error case - better option would be to handle it
  if (currentDate > endDate) return yearMonthPairs;

  //  TO IMPROVE - for now, we generate also the endDate month - even if it's not over
  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // months are zero-based which can be counter-intuitive
    const yearMonth = `${year}-${month.toString().padStart(2, '0')}`;
    yearMonthPairs.push(yearMonth);

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return yearMonthPairs;
};

/* 
 * Sums monthly electricity consumption for all devices
 * for all months where it's relevant - aka between the limitDate and the oldest purchase
 * TO IMPROVE - add possibility to specifiy a startDate
 */
export const electricityRecapByMonth = (
    allDevices: DeviceInventory[],
    mustRound?: boolean,
    limitDate?: Date,
  ): { [month: string]: number } => {
    
    const endDate = limitDate ?? new Date();
    const monthElecDic: {[month: string]: number} = {}

    allDevices.forEach((device) => {
      const monthlyConsumption = device.annualElectricalConsumption / 12;
      // TO IMPROVE - for now, the startDate is the month of purchase - even if that month was partially started
      const yearMonthPairs = generateYearMonthPairs(device.dateOfPurchase, endDate);

      yearMonthPairs.forEach((yearMonthPair: string) => {
        monthElecDic[yearMonthPair]
            ? monthElecDic[yearMonthPair] += monthlyConsumption
            : monthElecDic[yearMonthPair] = monthlyConsumption;
      })
    })

    if (mustRound) {
        return Object.assign({}, ...Object.entries(monthElecDic).map(([key, value]) => ({ [key]: Math.round(value) })));
    }

    return monthElecDic;
}
