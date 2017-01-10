// module.exports = function arrayMap(arr, fn) {
// 	return arr.reduce( (res, item, ind) => {
// 		res[ind] = fn(item);
// 		return res;
// 	}, []);
// }

module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
    }, [])
}

