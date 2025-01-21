import express, { Request, Response } from 'express';
import { ComputerInventory } from './types';
import { inventory } from './inventory';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/inventory', (req: Request, res: Response) => {

    // most recent first
    // TO IMPROVE - not efficient
  // const sortedInventory = inventory.sort((a, b) => b.dateOfPurchase.getTime() - a.dateOfPurchase.getTime())
  res.json(inventory);
});

app.get('/api/resource', (req: Request, res: Response) => {
  res.send('GET request to the resource');
});

app.post('/api/resource', (req: Request<{}, {}, ComputerInventory>, res: Response) => {
  const newComputer: ComputerInventory = req.body;
  inventory.push(newComputer);
  res.send(`POST request to the resource with computer name: ${newComputer.computerName}`);
});

app.put('/api/resource/:id', (req: Request<{ id: string }, {}, ComputerInventory>, res: Response) => {
  const updatedComputer: ComputerInventory = req.body;
  res.send(`PUT request to the resource with ID ${req.params.id} and computer name: ${updatedComputer.computerName}`);
});

app.delete('/api/resource/:id', (req: Request<{ id: string }>, res: Response) => {
  res.send(`DELETE request to the resource with ID ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});