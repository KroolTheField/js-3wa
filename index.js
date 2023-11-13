function myMap(arr, func) {
    const newArr = []

    for (i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }

    return newArr
}