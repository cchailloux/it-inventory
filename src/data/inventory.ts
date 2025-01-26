import { inventory } from "./mockData";
import { DeviceInventory } from "./types";

// buffer ad hoc layer
// with a real database, an actual ORM would be needed
export const getAllDevices = (): DeviceInventory[] => {
    return inventory;
}

export const addNewDevice = (newDevice: DeviceInventory): void => {
    inventory.push(newDevice);
}