function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3, 34, 234, 7777]));

var object = { firstname: "Mary", lastname: "Jane", age: 29}

console.log(object);

//help!