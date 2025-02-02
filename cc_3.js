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

   
// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Sophia", feedbackText: "Lowkey impatient", rating: 1 },
    { customerName: "Aanika", feedbackText: "Kinda annoying", rating: 2 },
    { customerName: "Horacio", feedbackText: "Delightful service", rating: 4 }
]; // Added the customer names as well as the feedback for each one, followed by their rating
feedback.push({ customerName: "Nia", feedbackText: "Best service I've ever recieved", rating: 5 }); // Adding another customer as seen above with more feedback and rating
console.log("Feedback List:", feedback); 


// Task 5: Inventory Management System
let inventory = {
    itemName: "Canon G7X",
    stockCount: 7,
    price: 999,
    calculateTotalValue: function () {
        return this.stockCount * this.price;
    }
}; // Made an item with limited stock and multiplied its stock by the price to get 6993; then used this. to defne the object and multiply the two values
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());
