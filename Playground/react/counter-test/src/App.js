import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

// function MyButton() {
//   return <button>I am a button</button>;
// }

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "48pt",
      }}
    >
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
        alt={"Photo of " + user.name}
      />
    </div>
  );
}
