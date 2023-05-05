fetch('https://fakestoreapi.com/products/category/electronics/products?limit=2')
            .then(res=>res.json())
            .then(json=>console.log(json))