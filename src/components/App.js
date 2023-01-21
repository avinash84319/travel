import React ,{useEffect ,useState} from 'react';
import './App.css';

function Start(){
  const [backendData, setBackendData]=useState([{}])

  useEffect(()=>{
    fetch("http://api.weatherapi.com/v1/current.json?key=886fd29f69ce4128a24113725232101&q=London&aqi=no").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  },[])


  return <div>
  <h1>{backendData.location.name}</h1>
  <form method="post"  action="/addtravel">
    <input type="text" placeholder="From" name="from" ></input>
    <input type="text" placeholder="To" name="To" ></input>
    <input type="date" placeholder="DD/MM/YYYY" name="date"></input>
    <button type="submit">✅</button>
    </form>
  </div>
}

function App() {
return <Start />
}

export default App;
