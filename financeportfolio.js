// Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// show total portfolio value and allocation percentages
console.log("Initial Portfolio Value:", calculatePortfolioValue());
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());

// create transaction instances
try { 
    const transaction1 = new Transaction(1, 'buy', 12); 
    transaction1.execute(); // Execute the transaction
    console.log("Transaction 1 processed:", transaction1);

    const transaction2 = new Transaction(2, 'sell', 8); 
    transaction2.execute(); // Execute the transaction
    console.log("Transaction 2 processed:", transaction2);

    const transaction3 = new Transaction(3, 'sell', 4); 
    transaction3.execute(); // Execute the transaction
    console.log("Transaction 3 processed:", transaction3);

} catch (error) {
    console.error(error.message); // log the error message
}

// show updated portfolio details
console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
