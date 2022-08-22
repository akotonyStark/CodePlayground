class Person{
  constructor(fname, lname){
    this.firstname = fname
    this.lastname = lname
  }
  
  sameMyName(){
    return this.firstname + ' ' + this.lastname
  }
}


const p1 = new Person('Bruce', 'Wayne')
console.log(p1.sameMyName())


class Superhero extends Person{
    constructor(fname, lname){
    super(fname, lname)
    this.isSuperhero = true
  }
  
  
  fightCrime(){
    console.log('fighting crime')
  }
}

const Batman = new Superhero('Bruce', 'Wayne')
console.log(Batman.sameMyName())
