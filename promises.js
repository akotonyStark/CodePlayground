const getCallback = (callback) => {
  setTimeout(() => {
    console.log('Timer up')
  }, 2000)
}

//a promis
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is the data from the promise')
    reject('this didnt go well')
  }, 2000)
})

myPromise
  .then(
    (data) => {
      console.log(data)
    },
    (error) => {
      console.log(error)
    }
  )
  .catch((e) => console.log(e))
