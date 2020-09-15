const toggle = document.getElementById('toggle');
const flex  = document.getElementById('flex');
const ball = document.getElementById('ball');
const label  =document.querySelector('label');
const input = document.querySelector("input");
input.addEventListener('change', function(e){
    flex.classList.toggle('show-monthly');
});


label.addEventListener('click', function(e){
    if(input.checked == false){
        ball.style.transform = 'translateX(40px)';
    }
    if(input.checked == true){
        ball.style.transform = 'translateX(0px)';
    }
});
console.log(input.value)
console.log(ball);
console.log(label);

