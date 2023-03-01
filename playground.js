// document.getElementById('hello-there').innerHTML='HelloWorld!'


// document.getElementById('random-button').onclick = function changeThis() {
//     document.getElementById('change-this').innerHTML = 'I changed this'
// };

// body = document.documentElement
// console.log(body);

// x = document.getElementById('main');
// y = x.getElementsByTagName('p')

// console.log(y);


// document.getElementById('button-2').onclick = changeRyu;

// function changeRyu() {
//     document.getElementById('ryu-2').src = 'ryu-1.jpg'
//     setInterval(function() {
//     document.getElementById('ryu-1').src = 'ryu-2.jpg'
//     }, 100)
// };


document.querySelector("#button-2").addEventListener("click", function() {
    document.querySelector("#ryu-2").src = "ryu-1.jpg"
    setTimeout(function() {
    document.querySelector("#ryu-2").src = "ryu-2.jpg"
    }, 100)
})

// elem = document.getElementById('hello-there');
// elem.innerHTML = 'test';
// elem = document.getElementById('change-color');
// elem.style.backgroundColor = 'red';



// document.getElementById('random-button').onclick = changeColor;

// function changeColor () {
//     document.getElementById('change-color').style.color = 'cyan';
// };

// document.getElementById('hide-button').onclick = function hideText() {
//     document.getElementById('hide-text').style.visibility = 'hidden';
// }

// document.getElementById('show-button').onclick = function hideText() {
//     document.getElementById('hide-text').style.visibility = 'visible';
// }

// document.getElementById('animation-start').style.backgroundColor = 'yellow'

