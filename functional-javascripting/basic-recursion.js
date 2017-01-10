// function reduce(arr, fn, initial) {
//   	let prev = initial,
//     curr = arr[0];
//     if (arr.length === 0) {
//     	return initial;
//   	} else {
//     	initial = fn(prev, curr);    
//     	return reduce(arr.slice(1), fn, initial);
//   	}
// } 

function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
    	if (index > arr.length - 1) return value 
        return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, initial) 
}

module.exports = reduce