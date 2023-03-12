// document.getElementById('hello-there').innerHTML='HelloWorld!'


// document.getElementById('random-button').onclick = function changeThis() {
//     document.getElementById('change-this').innerHTML = 'I changed this'
// };

// body = document.documentElement
// console.log(body);

// x = document.getElementById('main');
// y = x.getElementsByTagName('p')

// console.log(y);

// document.querySelector("#button-2").addEventListener("click", function() {
//     document.querySelector("#ryu-2").src = "ryu-1.jpg"
//     setTimeout(function() {
//     document.querySelector("#ryu-2").src = "ryu-2.jpg"
//     }, 100)
// })

// document.addEventListener("keypress", function(event) {
//     console.log(event.key);
// })

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

// document.querySelector("#button-2").addEventListener("click", function() {
//     document.querySelector("#ryu-2").src = "ryu-1.jpg"
//     setTimeout(function() {
//     document.querySelector("#ryu-2").src = "ryu-2.jpg"
//     }, 100)
// })


// elem = document.querySelector("#animation-start");

// elem.addEventListener("click", animateYellow);

// function animateYellow() {
//    elem.style.backgroundColor = 'yellow';
//    setTimeout(function() {
//    elem.style.backgroundColor = '';
//    }, 100)
// }


// elem = document.querySelectorAll("#ryu-2")[1];

// document.querySelector("#punch-button-1").addEventListener("click", function() {
//     elem.src = "ryu-1.jpg"
//     setTimeout(function() {
//     elem.src = "ryu-2.jpg"
//     }, 100)
// })

// document.querySelector("#punch-button-2").addEventListener("click", function() {
//     elem.src = "ryu-3.jpg"
//     setTimeout(function() {
//     elem.src = "ryu-2.jpg"
//     }, 100)
// })

// let arr = [1, 2, 3, 4];

// arr2 = arr.forEach(element => {
//     console.log(element * 2);
// });

let arr = [1, 2, 3, 4];

let arr2 = arr.map( e => {
    return e + 1;
})

console.log(arr2);