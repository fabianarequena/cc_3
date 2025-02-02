// Task 1: Product Price Management

let prices = [100, 200, 300, 400, 500];
prices.push(250);  // Added a new price to the array
prices.shift();    // Removed the first price from the array

console.log("Updated Prices:", prices);


// Task 2: Modifying Customer Orders

let orders = [10, 20, 30, 40, 50];
orders[2] += 5; // Increased the third order by 5, so from 30 to 35
let totalOrders = orders.reduce((total, num) => total + num, 0); // Calculated total # of orders
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);
 

// Task 3: Employee Performance Tracking
let employee = {
    name: "Tania Mendoza",
    role: "Pathologist",
    performanceScore: 95,
    isActive: true
    };
    employee.performanceScore = 97; // Updated performance score from 95 to 97
    employee.promotionEligible = true; // Added a new property for promotion eligibility using boolean to make it true
    console.log("Updated Employee Performance Tracking:", employee);

    