const electronicsHome = document.querySelector(".grid");



function showElectronicsHome(item) {
    let output = document.createElement("div");
    output.innerHTML = `<div class="grid-item">
    ${item.title}
    <div class="product-image" style="background: url(${item.image}) no-repeat center center/cover"></div>
    </div>`;
    electronicsHome.appendChild(output);
}

fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>{
                for (let index = 0; index < json.length; index++) {
                    if (index < 4) {
                        showElectronicsHome(json[index]);
                    }
                }
            });

