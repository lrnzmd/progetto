import React, { useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';
import Singolo from './Singolo'



function App() {

  const [lista, setLista] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [listafiltatta, setListafiltrata] = useState([])




  useEffect(()=>{
    loadData()
  },[]) 

 /* const handleChange = (e) => {
    const filtro = lista.filter(item => {
      return (item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.body.toLowerCase().includes(e.target.value.toLowerCase())) 
    });
    console.log("test: ", filtro);
    setSearchTerm(e.target.value);
    setLista(filtro);
    console.log(e.target.value)
  }*/


  useEffect(()=>{
    setListafiltrata(
      lista.filter(item => {
        return (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.body.toLowerCase().includes(searchTerm.toLowerCase())) 
      })
    )
  },[lista, searchTerm])

  const loadData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dati = await response.json()
    setLista(dati)
    console.log(dati)
  }


  return (
    <div className="App">
    <h5 className='title'>COMPITO</h5>
      <input
        className='input'
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
      />
      <div class="row">
          {listafiltatta.map((item) => {
            return (
              <Col sm="4">
                 <Singolo {...item}/>
              </Col>
              )
          })}    
      </div>
    </div>
  );
}

export default App;
