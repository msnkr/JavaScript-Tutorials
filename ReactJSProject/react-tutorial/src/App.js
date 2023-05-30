import react from "react";
import './App.css';

// function MyButton() {
//   return (
//     <button>Submit</button>
//   )
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my App</h1>
//       <MyButton />
//     </div>
//   );
// }

const user = {
  name: "Mikyle",
  age: 32,
}

export default function Profile() {
  return (
    <div>
      <h1 className="name">{user.name}</h1>
      <h1>{user.age}</h1>
    </div>
  )
}