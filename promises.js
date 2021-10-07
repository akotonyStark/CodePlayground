const getDataCallback = (callback) => {
  setTimeout(() => {
    console.log('Timer up')
  }, 3000)
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



const getData = () => {
  const request = new XMLHttpRequest()

  request.open('GET', 'https://www.mocky.io/v2/5c3e15e63500006e003e9795')
  request.send()

  if (request.readyState === 4) {
    const data = JSON.parse(request.responseText)
    return data
  }
}

const products = getData()
console.log(products)
