let arr = [2, 3, 7, 7, 8, -9, -1, 9, -1, -3]

let accumulatorEven = []

for(let a of arr){
    if(a % 2 === 0){
        accumulatorEven.push(a)
    }
}
console.log(accumulatorEven)