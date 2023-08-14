import "./App.css";

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// function MyButton() {
//   return <button>I am a button</button>;
// }

// export default function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-evenly",
//         marginTop: "48pt",
//       }}
//     >
//       <h1>{user.name}</h1>
//       <img
//         src={user.imageUrl}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//           borderRadius: "50%",
//         }}
//         alt={"Photo of " + user.name}
//       />
//     </div>
//   );
// }

// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }

// function handleClick() {
//   alert("You clicked me");
// }

// export default function App() {
//   return <button onClick={handleClick}>Click Me</button>;
// }

// import { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <h1>This is a counter</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <MyButton count={count} onClick={HandleClick} />
      <MyButton count={count} onClick={HandleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}> Pressed {count} times</button>;
}
