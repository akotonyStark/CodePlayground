const myFunction = () => {
  const message = 'This is my message'
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

const myPrintMessage = myFunction()

myPrintMessage() // This is my message


const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    },
  }
}

const counter = createCounter()

counter.decrement()
counter.increment()
counter.increment()

console.log(counter.get())

const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add_10 = createAdder(10)
console.log(add_10(5))

const add_100 = createAdder(100)
console.log(add_100(-50))


