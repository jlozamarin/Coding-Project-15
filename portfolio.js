// Task 2: Create the Portfolio Module
import { assets } from './asset.js'; // import assets array 

// calculate the total value of the portfolio
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

// calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    const total = calculatePortfolioValue(); 
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / total * 100).toFixed(2)  
    }));
}
