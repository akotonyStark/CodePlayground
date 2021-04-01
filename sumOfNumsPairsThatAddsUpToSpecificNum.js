let array = [1,7,4,4,5,2];
function one(data){
  let time_start = new Date().getTime();
  let w = []
  data.forEach(function(numb, index){
    let a = data[index] || '', b = data[index + 1] || '';
    if(a + b === 8)w.push(a, b)
  });
  
  let duration = new Date().getTime() - time_start;
  console.log('Processed in: ' + duration + 'ms');
  return w;
}
console.log(one(array))
 
//console.log(w);
 
textRun()
function textRun(){
  let time_start = new Date().getTime();
  let array = [1,7,4,4,5,2]
  console.log(array);
  let temp = []
  array.forEach(function(item, index){
   var head = array[index];
   var otherPair = 8-head;
   temp.push(otherPair)
   if(temp.includes(head)){
     let a = array.indexOf(head);
     let b = array.indexOf(otherPair);
     let c = array.indexOf(otherPair, a + 1);
     if(a !== b){
       console.log(a, b)
     }else{
       console.log(a, c)
     }
   }
 
});
 
let duration = new Date().getTime() - time_start;
console.log('Processed in: ' + duration + 'ms');
 
}
