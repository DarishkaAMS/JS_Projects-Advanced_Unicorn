class Person {
    static counter = 1;
    constructor(state = "active", uid = "0-0"){
        this.state = state;
        this.uid = uid;

    }
    getState(){
        return this.state
    }   
    setState(newState){
        // Correct solution
        if (newState === "active" || newState === "inactive"){
            this.state = newState;
        } else {
            throw new Error("new State is not correct")
        }
    }
    getUid(){
        return this.uid;
    }
    static getCountOfPersons(){
        this.counter++
        return this.counter;
    }
   
}

module.exports = Person;