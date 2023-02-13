import React ,{useEffect ,useState} from 'react';
import './App.css';
import Result from './Result'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Start(){
  return <div className='main'>
  <h1 className='mainh1'>Find or Become One Traveler :-</h1>
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  <form method="post"  action="http://localhost:5000/addreq" className='formclass'>
  <TextField id="outlined-required" type="text" placeholder="Username" name="username" className="inputs" ></TextField>
  <TextField id="outlined-required" type="text" placeholder="phone no" name="phoneno" className="inputs"></TextField>
    <TextField id="outlined-required" type="text" placeholder="From" name="from" className="inputs"></TextField>
    <TextField id="outlined-required" type="text" placeholder="To" name="to" className="inputs" ></TextField>
    <TextField id="outlined-required" type="date" placeholder="DD/MM/YYYY" name="date" className="inputs"></TextField>
    <TextField id="outlined-required" type="time" name="time" required className="inputs"></TextField>
<Select placeholder='cat' id="demo-simple-select" name="category">
  <MenuItem value="pp">Pass a package</MenuItem>
  <MenuItem value="tr">Traveling</MenuItem>
  <MenuItem value="wt">Want to travel</MenuItem>
</Select>
<TextField id="outlined-required" type="textbox" name="message" placeholder='message' className='inputs'></TextField>
    <button type="submit" className="sb">SUBMIT</button>
    </form>
    </Box>
    <Result />
  </div>
}

function App() {
return <Start />
}

export default App;
