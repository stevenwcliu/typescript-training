class Customer {
    // properties, public by default, but supposed to be private
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

// let myCustomer = new Customer(); // use new keyword to create instance

// myCustomer.firstName = "Steven";
// myCustomer.lastName = "Liu";

let mCustomer = new Customer("Steven", "Liu");

console.log(mCustomer.firstName, mCustomer.lastName);