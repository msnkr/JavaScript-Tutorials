const grid = document.querySelector(".grid")
const imgArr = ['https://plus.unsplash.com/premium_photo-1678990345290-735e9718af20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'https://plus.unsplash.com/premium_photo-1668051042204-038187cac123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://plus.unsplash.com/premium_photo-1682124669726-6721b5a1932c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1597008605956-f9200dc543ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FjaGFwb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60', 'https://images.unsplash.com/photo-1533969206871-9be1be6cb3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FjaGFwb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60']


imgArr.forEach(img => {
    let output = document.createElement("div");
    output.style.background = `url(${img}) no-repeat center center/cover`;
    output.classList.add("grid-items");
    grid.appendChild(output);
});