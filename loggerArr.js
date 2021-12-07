var loggerArr = createLoggerArr();
console.log(loggerArr[0]()) //LOG: 0
console.log(loggerArr[74]() )   //LOG: 74
console.log(loggerArr[20]() ) //LOG: 20
console.log(loggerArr[120]() ) //LOG: 74


function createLoggerArr() {
    let arr = Array(100);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = function () {
            return i;
        }
    }
    return arr;
}

