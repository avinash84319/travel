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

  if(backendData[0].phoneno ==="No Travels Found"){
    return 
  }
  else{
    return <div className="mainr">
    <h1 className="hinr">Traveler who might help :-</h1>
    <ul>
    {backendData.map(damm => (
        <li>
          {damm.phoneno}
        </li>
      ))}
      </ul>
    </div>
  }
}

export default Result;