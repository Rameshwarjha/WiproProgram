class Customer {
    id: number;
    name: string;
    address: string;
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getAddress(): string {
        return this.address;
    }
}
const customer = new Customer(11, "rose", "water park");
console.log(customer.getAddress());