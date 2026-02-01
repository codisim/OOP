const Person = require("./Person");

const _profession = Symbol("profession");
const _income = Symbol("income");
const _children = Symbol("children");


class Guardian extends Person {
    constructor(id, name) {
        super(id, name);
        this[_profession] = null;
        this[_income] = null;
        this[_children] = [];
    }

    get profession() {
        return this[_profession];
    }

    set profession(profession) {
        this[_profession] = profession;
    }

    get income() {
        return this[_income];
    }


    get children() {
        return this[_children];
    }

    addChildren(child) {
        this[_children].push(child);
    }


    set income(income) {
        this[_income] = income;
    }

    toString() {
        return `${super.toString()}, Profession: ${this[_profession]}, Income: ${this[_income]}`;
    }
}



module.exports = Guardian;