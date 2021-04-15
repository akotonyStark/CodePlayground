class Dog{ // class name

    constructor(name = "Nala", weight = "unknown", coatColor = "maybe black"){ // default constructor
        this.weight = weight;
        this.name = name;
        this.coatColor = coatColor;
    }

}

//if params are passed
let nala = new Dog("Tasha", 22, "Black and Brown")
console.log(nala.name, 'is', nala.weight, 'kgs, and is', nala.coatColor)

//if no params passed, default is set
let strayDog = new Dog()
console.log(strayDog.name, 'is', strayDog.weight, 'kgs, and is', strayDog.coatColor)
