import react from "react";
import './App.css';

function Button() {
  return (
      <button>Submit</button>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Hello Mikyle</h1>
      <Button />
      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.height}</h1>
      </div>
    </div>
  );
}

let user = {
  name: "Mikyle",
  age: 32,
  height: 1.82,
}

