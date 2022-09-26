function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(text)
    }, time);
  })
}

Promise.all([showText('hello', 1000), Promise.resolve('hi')]).then((value) => {
  console.log(value)
})
