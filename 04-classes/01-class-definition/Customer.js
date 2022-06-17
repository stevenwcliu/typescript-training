"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
// let myCustomer = new Customer(); // use new keyword to create instance
// myCustomer.firstName = "Steven";
// myCustomer.lastName = "Liu";
let myCustomer = new Customer("Steven", "Liu");
console.log(myCustomer.firstName, myCustomer.lastName);
