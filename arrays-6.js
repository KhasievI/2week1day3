    let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 4]

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        } 
    }

    let i = 0;
    while(i < arr.length){
        if(arr[i] % 2){
            console.log(arr[i]);
        }
        i++
    }