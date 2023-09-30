import Building from '../5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
    // constructor(sqft, name, quote){
    //     super(sqft);
    //     this.name = name;
    //     this.quote = quote;
    // }

    // evacuationWarningMessage(){
    //     return "Implemented Evacuation Warning Message"
    // }
    // toString(){
    //     return `My name is ${this.name}, For quotes: ${this.quote} and square feet value: ${this._sqft}`
    // }
}

try {
    new TestBuilding(200)
    // new TestBuilding(200, 'John', "I love Jesus")
    // console.log(new TestBuilding(100,'JAMES', "I don't do quotes"))
    // console.log(new TestBuilding(100,'JAMES', "I don't do quotes").toString())
}
catch(err) {
    console.log(err);
}
