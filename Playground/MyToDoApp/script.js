const search = document.querySelector(".add-item");
const submitBtn = document.querySelector(".submit-btn");
const ulContainer = document.querySelector(".item-here");


// 2.Put value in list.
let itemList = [];

// Loop over list with key-value pair.
function loopListItems(){
    itemList.forEach(e => {
        console.log(e);
    })
}
// Display items from list on dom


// 1.On submit-btn get the value from input.
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    itemList.push(search.value);
    search.value = "";
})