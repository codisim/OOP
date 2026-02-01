

class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }


    changeName(name){
        this.name = name;
    }

    sendEmail(msg){
        console.log('To', this.email);
        console.log('Sending Email');
        console.log('MSG: ', msg);
    }


}


const p1 = new Person("Habiba", "habiba@gmail.com");
const p2 = new Person("Farhana", "farhana@gmail.com");



p1.sendEmail("Hello Habiba, How are you?");
p2.sendEmail("Hello Farhana, How have you been?");

console.log(p1);
console.log(p2);
