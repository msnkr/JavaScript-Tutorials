const grid = document.querySelector(".grid");


function showHome(item) {
    let output = document.createElement("div");
    output.innerHTML = `<div class="grid-item">
    ${item.title}
    <div class="product-image" style="background: url(${item.image}) no-repeat center center/200px 200px"></div></div>`;
    grid.appendChild(output);
}

function fetchItems(what) {
fetch(`https://fakestoreapi.com/products/category/${what}`)
    .then(res=>res.json())
    .then(json=>{
        for (let index = 0; index < json.length; index++) {
            showHome(json[index])
        }
    });
}

fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> {
                json.forEach(element => {
                    fetchItems(element);
                });
            })