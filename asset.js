// Task 1: Create the Asset Module

// array of assets
export const assets = [ 
    { id: 1, name: 'Apple Inc.', type: 'stock', price: 180.50, quantity: 100 }, // stock for Apple Inc.
    { id: 2, name: 'Microsoft Corporation', type: 'stock', price: 320.25, quantity: 80 }, // stock for Microsoft Corporation
    { id: 3, name: 'Nike Inc.', type: 'bond', price: 1200, quantity: 60 }, // bond for Nike Inc.
    { id: 4, name: 'PepsiCo Inc.', type: 'bond', price: 850, quantity: 40 } // bond for PepsiCo Inc.
];

// returns asset details based on the id
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

// console log the asset details
console.log(getAssetById(1));
console.log(getAssetById(2)); 
console.log(getAssetById(3));
console.log(getAssetById(4)); 
