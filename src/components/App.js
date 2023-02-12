import React ,{useEffect ,useState} from 'react';
import './App.css';
import Result from './Result'

function Start(){
  return <div>
  <form method="post"  action="http://localhost:5000/addreq" className='formclass'>
  <input type="text" placeholder="Username" name="username" className="inputs"></input>
  <input type="text" placeholder="phone no" name="phoneno" className="inputs"></input>
    <input type="text" placeholder="From" name="from" className="inputs"></input>
    <input type="text" placeholder="To" name="to" className="inputs" ></input>
    <input type="date" placeholder="DD/MM/YYYY" name="date" className="inputs"></input>
    <input type="time" name="time" required className="inputs"></input>
    <label for="cars" className='inputs'>choose a category:</label>
  <select id="cars" name="category" className='inputs'>
  <option value="pp">Pass a package</option>
  <option value="saab">Traveling</option>
  <option value="fiat">Want to travel</option>
</select>
<input type="textbox" name="message" placeholder='message' className='inputs'></input>
    <button type="submit" className="inputs">✅</button>
    </form>
    <Result />
  </div>
}

function App() {
return <Start />
}

export default App;
