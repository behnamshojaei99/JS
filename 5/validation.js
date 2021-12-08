let inputs = document.querySelectorAll('input');
console.log(inputs)
for(var i = 0; i < inputs.length; i += 1) {
    (function () {
        var input = inputs[i];
        input.addEventListener('focusout', function () {
            console.log((input.value))
            if (!input.value) {
                console.log(input.name)
                input.style.border = '2px solid red';
                throw new Error("input is empty")
            }else  {
                console.log(input.name)
                input.style.border = 'none';
            }
        });
    })();
}
