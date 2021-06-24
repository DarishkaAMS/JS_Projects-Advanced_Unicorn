const Person = require("./person");
const Human = require("./human");

class Uuee extends Person {
    constructor(owner, state, uid){
        if (owner instanceof Human) {
            super(uid)
            this.owner = owner;
            this.state = state;
        } else {
            throw new Error ("It is not an instance of Homan")
        }
    }  

    sayHello(caller) {
        if (caller === this.owner){
            return `Hello ${this.owner.getName()}.`  
        } else {
            return "No!"       
        }
    }
}

module.exports = Uuee;
