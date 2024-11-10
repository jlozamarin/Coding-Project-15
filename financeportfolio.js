// Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { getAssetById } from './asset.js';

function displayPortfolio() {
    const portfolioDetails = document.getElementById('portfolioDetails'); // get portfolio details
    const portfolioPercentages = document.getElementById('portfolioPercentages'); // get portfolio percentages

    // show the total portfolio value
    const totalValue = calculatePortfolioValue();
    portfolioDetails.innerHTML = `<p>Total Portfolio Value: $${totalValue.toFixed(2)}</p>`;

    // show the percentage allocation of each asset in the portfolio
    const allocations = getPortfolioAllocation();
    portfolioPercentages.innerHTML = ''; // clear the previous list
    allocations.forEach(allocation => {
        const li = document.createElement('li');
        li.textContent = `${allocation.name}: ${allocation.allocation}%`;
        portfolioPercentages.appendChild(li);
    });
}

// log the transaction
function logTransaction(transaction) {
    const transactionLog = document.getElementById('transactionLog');
    const asset = getAssetById(transaction.assetID);
    const li = document.createElement('li');
    li.textContent = `${transaction.type.toUpperCase()} ${transaction.quantity} units of ${asset.name}`;
    transactionLog.appendChild(li);
}

// display the portfolio
displayPortfolio();

// create transactions
try { 
    const transaction1 = new Transaction(1, 'buy', 12);  // buy 12 units of Apple Inc.
    transaction1.execute();
    logTransaction(transaction1);

    const transaction2 = new Transaction(2, 'sell', 8); // sell 8 units of Microsoft Corporation
    transaction2.execute();
    logTransaction(transaction2);

    const transaction3 = new Transaction(3, 'sell', 4);  // sell 4 units of Nike Inc.
    transaction3.execute();
    logTransaction(transaction3);

} catch (error) {
    console.error(error.message); // error message
}

// display the updated portfolio
displayPortfolio();
