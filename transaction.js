// Task 3: Create the Transaction Module

import { assets, getAssetById } from './asset.js';

// transaction class
export class Transaction {
    constructor(assetID, type, quantity) {
        this.assetID = assetID;
        this.type = type;
        this.quantity = quantity;
    }

    // execute the transaction
    execute() {
        const asset = getAssetById(this.assetID);

        if (this.type === 'buy') { // checks if the transaction type is buy
            asset.quantity += this.quantity; 
            console.log(`${this.quantity} units of ${asset.name} were added to your portfolio.`);
        } else if (this.type === 'sell') {

            // checks if there's enough quantity for the sale
            if (asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}.`);
            }
            asset.quantity -= this.quantity; // reduce the quantity
            console.log(`Sale complete: ${this.quantity} units of ${asset.name}.`);
        }
    }
}
