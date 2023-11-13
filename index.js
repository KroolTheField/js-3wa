function myMap(arr, func) {
    const newArr = []

    for (i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }

    return newArr
}

function myFilter(arr,func) {
    const filteredArr = []

    for (i=0; i < arr.length; i++) {
        const result = func(arr[i])

         if (result === true) {
            filteredArr.push(result)
         }
    }

    return filteredArr
}