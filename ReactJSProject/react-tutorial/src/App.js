import react from "react";
import './App.css';

function Button() {
  return (
      <button className="button-1">Submit</button>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Hello Mikyle</h1>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.height}</h1>
      </div>
      <div>
        <ContactForm/>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

let user = {
  name: "Mikyle",
  age: 32,
  height: 1.82,
}

function ContactForm() {
  return (
    <div> 
      <form className="form-control">
        <input type="text" name="" id="" placeholder="name"/>
        <input type="text" name="" id="" placeholder="password"/>
      </form>
    </div>
  )
}