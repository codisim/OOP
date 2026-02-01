

class Person {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }


    changeName(name){
        this.name = name;
    }

    sendEmail(msg){
        console.log('To', this._email);
        console.log('Sending Email');
        console.log('MSG: ', this._sanitizeMsg(msg));
    }


    _sanitizeMsg(msg){
        return msg.trim().toLowerCase();
    }


    getName(){
        return this._name;
    }

    setName(name){
        this._name = name;
    }

    getEmail(){
        return this._email;
    }

    setEmail(email){
        this._email = email;
    }

}


const p1 = new Person("Habiba", "habiba@gmail.com");
const p2 = new Person("Farhana", "farhana@gmail.com");



p1.sendEmail("Hello Habiba, How are you?");
p2.sendEmail("Hello Farhana, How have you been?");

console.log(p1);
console.log(p2);
