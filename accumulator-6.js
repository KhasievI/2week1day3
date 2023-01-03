const arr = [1, 2, 3, 4, 5, 5, 1, 4, 5, 7]

let accumulatorOdd = []

for(let a of arr){
    if(a % 2){
        accumulatorOdd.push(a)
    }
}
console.log(accumulatorOdd)