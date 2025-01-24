import express, { Request, Response } from 'express';
import path from 'path';

import { DeviceInventory } from './data/types';
import { addNewDevice, getAllDevices } from './data/inventory';
import { electricityRecapByMonth } from './electricity'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/inventory', (req: Request, res: Response) => {
  // most recent first
  // TO IMPROVE - not efficient
  // const sortedInventory = inventory.sort((a, b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime())
  res.json(getAllDevices());
});

app.get('/api/consumption', (req: Request, res: Response) => {
  const currentDate = new Date()
/*   const annualConsumption = inventory.reduce((accumulator, valeur) => {
    // First iteration: assume a device consumes the whole month - even when bought the 29th
    return accumulator + valeur.annualElectricalConsumption/12
    
    }, 0) */
  res.json(electricityRecapByMonth(true));;
});

app.get('/api/resource', (req: Request, res: Response) => {
  res.send('GET request to the resource');
});

app.post('/api/resource', (req: Request<{}, {}, DeviceInventory>, res: Response) => {
  const newComputer: DeviceInventory = req.body; // req.body being the exact right type is a bold assumption
  addNewDevice(newComputer);
  res.send(`POST request to the resource with computer name: ${newComputer.computerName}`);
});

app.put('/api/resource/:id', (req: Request<{ id: string }, {}, DeviceInventory>, res: Response) => {
  const updatedComputer: DeviceInventory = req.body;
  res.send(`PUT request to the resource with ID ${req.params.id} and computer name: ${updatedComputer.computerName}`);
});

app.delete('/api/resource/:id', (req: Request<{ id: string }>, res: Response) => {
  res.send(`DELETE request to the resource with ID ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});