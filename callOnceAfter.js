var logger = callOnceAfter(function(arg) { console.log(arg) }, 5000);
logger('first');
logger('second');
logger('last');   //LOG: last

function callOnceAfter(callback, t) {
    let id = null;
    return function(arg) {
         clearTimeout(id);
         id = setTimeout(() => callback(arg), t);
    }
}