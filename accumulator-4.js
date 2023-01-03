const arr = ['Ислам', 'Аслан', 'Эльберт', 'Джовхар', 'Малик', 'Абдул', 'Алик', 'Расул', 'Альви', 'Ибра']

let accumulator = []

for(let a of arr){
    if (a[0].toLowerCase() === 'а') {
        accumulator.push(a)
    }
}
console.log(accumulator)