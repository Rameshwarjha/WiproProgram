interface Employee {
    name: string;
    details(): string;
}
class Permanent implements Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    details(): string {
        return this.name + " is Permanent";
    }
}
class Temporary implements Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    details(): string {
        return this.name + " is Temporary";
    }
}

var emp = new Permanent('John');
console.log(emp.details());
emp = new Temporary("Cena");
console.log(emp.details());