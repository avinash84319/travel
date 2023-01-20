import './App.css';

function Start(){
  return <div>
    <input type="text" placeholder="From" name="from" ></input>
    <input type="text" placeholder="To" name="To" ></input>
    <input type="date" placeholder="DD/MM/YYYY" name="date"></input>
    <button type="submit">✅</button>
  </div>
}

function App() {
return <Start />
}

export default App;
