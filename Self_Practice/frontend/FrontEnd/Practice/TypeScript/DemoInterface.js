var Permanent = /** @class */ (function () {
    function Permanent(name) {
        this.name = name;
    }
    Permanent.prototype.details = function () {
        return this.name + " is Permanent";
    };
    return Permanent;
}());
var Temporary = /** @class */ (function () {
    function Temporary(name) {
        this.name = name;
    }
    Temporary.prototype.details = function () {
        return this.name + " is Temporary";
    };
    return Temporary;
}());
var emp = new Permanent('John');
console.log(emp.details());
emp = new Temporary("Cena");
console.log(emp.details());
