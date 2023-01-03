const arr = ['Ислам', 'Аслан', 'Эльберт', 'Джовхар', 'Малик', 'Абдул', 'Алик', 'Расул', 'Альви', 'Ибра']

for (i = 0; i < arr.length; i++) {
    let x = arr[i]
    if (x[0].toLowerCase() === 'а') {
        console.log(arr[i]);
    }
}