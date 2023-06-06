import './App.css';


export default function App() {
  return (
    <div>
      <h1>Hello there</h1>
      <div className='colors' style={{background: GetRandomColor()}}></div>
      <GetData/>
    </div>
  ) 
}



function GetRandomColor() {
  let colors = ["#393646", "#4f4557", '#6d5d6e', '#f4eee0'];
  let randomNum = Math.floor( Math.random() * 4 );
  return colors[randomNum];
}

function GetData() {
  <div>
    <input placeholder='height' name='heightInput'/>
    <input placeholder='weight' name='weightInput'/>
    <button>Submit</button>
  </div>
}