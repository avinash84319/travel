import React ,{useEffect ,useState} from "react";
function Result(){
    const [backendData, setBackendData]=useState([{}])

  useEffect(()=>{
    fetch("/resarrus").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  },[])


    return <div><h1>Travel which might help :-</h1>
    <ul>
    {backendData.map(damm => (
        <li>
          {damm.phoneno}
        </li>
      ))}
      </ul>
    </div>
}

export default Result;