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

