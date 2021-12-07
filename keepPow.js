function pow(x) {
    return x * x;
}
var keepPow = keep(pow);
console.log(keepPow(10))
console.log(keepPow(10));
console.log(keepPow(10));
console.log(keepPow(9));

function keep(callback) {
    let memoize = {};
    return function(x) {
        if (x in memoize) {
            console.log('cached');
            return memoize[x];
        }else {
            console.log('calculated');
            let result = callback(x)
            memoize[x] = result
            return result
        }
    }

}