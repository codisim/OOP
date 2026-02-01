

class Person {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }


    get name(){
        return this._name;
    }
    

    set name(value){
        if (value.toString() === "farhana") return;
        this._name = value;
    }


}


const p1 = new Person("Habiba", "habiba@gmail.com");
const p2 = new Person("Farhana", "farhana@gmail.com");


console.log(p2.name);

