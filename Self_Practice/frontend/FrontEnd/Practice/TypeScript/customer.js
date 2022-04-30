var Customer = /** @class */ (function () {
    function Customer(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Customer.prototype.getAddress = function () {
        return this.address;
    };
    return Customer;
}());
var customer = new Customer(11, "rose", "water park");
console.log(customer.getAddress());
