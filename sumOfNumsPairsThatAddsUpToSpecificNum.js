/* solution one */
let array = [1,7,4,4,5,2];
function one(data){
  //let time_start = new Date().getTime();
  let w = []
  data.forEach(function(numb, index){
    let a = data[index] || '', b = data[index + 1] || '';
    if(a + b === 8)w.push(a, b)
  });
  
  //let duration = new Date().getTime() - time_start;
  //console.log('Processed in: ' + duration + 'ms');
  return w;
}
console.log(one(array))

/* solution two */ 
textRun()
function textRun(){
  //let time_start = new Date().getTime();
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
       console.log(array[a], array[b])
     }else{
       console.log(array[a], array[c])
     }
   }
 
});
 
//let duration = new Date().getTime() - time_start;
//console.log('Processed in: ' + duration + 'ms');
 
}


/* solution 3*/
//let time_start = new Date().getTime();
let arr = [1,2,6,4]

for(i=0; i<arr.length; i++){
  for(j=i+1; j<arr.length; j++){
   
    let sum = arr[i] + arr[j];

    if(sum === 8){
      console.log(arr[i], arr[j])
    }
  }
}
//let duration = new Date().getTime() - time_start;
//console.log('Processed in: ' + duration + 'ms');


/* solution 4 */
let arr = [1,2,3,5,7]

var head = 0;
var tail = arr.length - 1;
for(i = head; i < arr.length; i++){
  for(j=tail; j>i; --j){
      if(arr[i] + arr[j] === 8){
      console.log(arr[i], arr[j])
      }
  }
}


/* solution 5*/
let arr = [1,9,-1,2,3,7,5]

var low = 0;
var high = arr.length - 1;
while(low < high){
  if(arr[low] + arr[high] === 8){
    console.log(arr[low], arr[high])
  }
  low++
