import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [oggetto, setOggetto] = useState([])

  useEffect(()=>{
    loadData()
  },[])

  const loadData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setOggetto(data)
    console.log(data)
  }


  return (
    <div className="App">
      {oggetto.map((item)=>{
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
