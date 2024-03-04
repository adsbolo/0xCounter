let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');

let int = document.getElementById('number');
let integer = 0;

plus.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})
minus.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})
reset.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = integer;
})
