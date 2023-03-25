let getText = document.getElementById("get-text"),
    getTextOutput = document.getElementById("output")
    getJson = document.getElementById("get-json")
    getApi = document.getElementById("get-api-data"),
    addPost = document.getElementById("add-post");


function addPostFunc(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) =>  res.json())
    .then((data) => console.log(data))
}    

function getApiFunc() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => {
        let output = "<h2>Posts</h2>";
        data.forEach(element => {
            output += `
            <div>
                <h3>${element.title}</h3>
                <p>${element.body}</p>
            </div>
            `
        });
        getTextOutput.innerHTML = output;
    })
} 

function getJsonFunc() {
    fetch("users.json")
    .then(res => res.json())
    .then((data) => {
        let output = "<h2>Users</h2>";
        data.forEach(element => {
            output += `
            <ul>
            <li>Name: ${element.name}</li>
            <li>ID: ${element.id}</li>
            <li>Email: ${element.email}</li>
            </ul>
            `
        });
        getTextOutput.innerHTML = output;
    })
}


function getTextFunc() {
    fetch("sample.txt")
    .then(res =>  res.text())
    .then(data => {
        getTextOutput.innerHTML = data;
    }) 
    .catch((err) => console.log(err));
}

getText.addEventListener("click", getTextFunc);
getJson.addEventListener("click", getJsonFunc);
getApi.addEventListener("click", getApiFunc);
addPost.addEventListener("submit", addPostFunc);