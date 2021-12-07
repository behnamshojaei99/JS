var argsLimited = argsLimiter(function (...args) {
    console.log(args)
}, 5);

argsLimited(1,2,4,9,0,98)

function argsLimiter(callback, n) {
    return function (...args) {
        args.length = n;
        callback(...args);
    }
}