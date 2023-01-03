let arr = [1, 4, 4, 6, 7, 8, -2, -5, 3, 6]    
let accumulator = 0

let i = 0;
while(i < arr.length){
    if(arr[i] >= 0){
        accumulator += arr[i]
    }
  i++
}
console.log(accumulator)