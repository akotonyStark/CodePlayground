const getCallback = (callback) => {
  setTimeout(() => {
    console.log('Timer up')
  }, 2000)
}

//a promis
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Worked well')
  }, 2000)
})

myPromise
