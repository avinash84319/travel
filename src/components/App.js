import React ,{useEffect ,useState} from 'react';
import './App.css';

function Start(){
  const [backendData, setBackendData]=useState([{}])

  useEffect(()=>{
    fetch("/status").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  },[])

  if(backendData.status =="getinfo"){
  return <div>
  <form method="post"  action="http://localhost:5000/app">
    <input type="text" placeholder="From" name="from" ></input>
    <input type="text" placeholder="To" name="to" ></input>
    <input type="date" placeholder="DD/MM/YYYY" name="date"></input>
    <button type="submit">✅</button>
    </form>
  </div>
  }
  else if(backendData.status == "gotinfo"){
    return <div>
      <h1>working</h1>
    </div>
  }
}

function App() {
return <Start />
}

export default App;
