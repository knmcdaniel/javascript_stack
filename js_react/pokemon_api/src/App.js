import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then(response => response.json())
      .then(response => { setPokemon(response.results)})
      .catch(err => {console.log(err);
    })
  },[]);



  return (
    <div className="App">
        <div className = "overflow">
          { pokemon.length > 0 && pokemon.map((pokemon, index) => {
            return (<div key={index}>{pokemon.name}</div>)
          })}
        </div>
    </div>
  );
}

export default App;
