    let arr = ['JavaScript', 'Python', 'Java', 'CС', 'PHP', 'C', 'Visualdevelopmenttools', 'Kotlin', 'Swift', 'Go']
    let accumulator = []

    for(let a of arr){
        if(a.length > 3){
            accumulator.push(a) 
        }
    }