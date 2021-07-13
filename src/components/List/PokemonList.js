import React, { useState, useEffect } from 'react'
import axios from '../../service/axios'

import './PokemonList.css'

const PokemonList = () => {
  const [listItem, setListItem] = useState([]);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        console.log(res)
        setListItem(res.data.results)
      })
  }, [])

  return (
    <div className="PokemonList__div">
      <h1 className="PokemonList__h1">Pokemon List</h1>
      <ul className="PokemonList__ul">
        {listItem.map((pokemon) => (
          <li className="PokemonList__li">{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList