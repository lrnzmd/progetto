import React, { useState, useEffect} from 'react';
import './App.css';
import Lista from './Lista';

function App() {

  const [oggetto, setOggetto] = useState([])

  useEffect(()=>{
    loadData()
  },[])

  const loadData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dati = await response.json()
    setOggetto(dati)
    console.log(dati)
  }


  return (
    <div className="App">
  
        <Lista oggetto={oggetto}/>
    
    </div>
  );
}

export default App;
