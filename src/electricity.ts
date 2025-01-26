import { getAllDevices } from "./data/inventory";
import { DeviceInventory } from "./data/types";

const generateYearMonthPairs = (startDate: Date, endDate: Date): string[] => {
  const yearMonthPairs: string[] = [];
  let currentDate = new Date(startDate);
  // early return to avoir error case - better option would be to handle it
  if (currentDate > endDate) return yearMonthPairs;

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
 * for all months where it's relevant - aka between now and oldest purchase
 */
export const electricityRecapByMonth = (allDevices: DeviceInventory[], mustRound?: boolean): { [month: string]: number } => {
    const todayDate = new Date();
    const monthElecDic: {[month: string]: number} = {}

    allDevices.forEach((device) => {
      const monthlyConsumption = device.annualElectricalConsumption / 12;
      const yearMonthPairs = generateYearMonthPairs(device.dateOfPurchase, todayDate);

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
