var person = {
  name: 'Augustine',
  hello: function(thing){
    console.log(this.name + " says hello "+ thing)
  }
}


var alterEgo = {
  name: 'Mr Stark'
}

person.hello.call(alterEgo, "world")
person.hello.apply(alterEgo, ["world"])
const newFunction = person.hello.bind(alterEgo)
