import React ,{useEffect ,useState} from 'react';
import './App.css';

function Start(){
  const [backendData, setBackendData]=useState([{}])

  useEffect(()=>{
    fetch("/app").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  },[])


  return <div>
  <h1>{backendData.fuckyou}</h1>
  <form method="post"  action="http://localhost:5000/app">
    <input type="text" placeholder="From" name="from" ></input>
    <input type="text" placeholder="To" name="to" ></input>
    <input type="date" placeholder="DD/MM/YYYY" name="date"></input>
    <button type="submit">✅</button>
    </form>
  </div>
}

function App() {
return <Start />
}

export default App;
