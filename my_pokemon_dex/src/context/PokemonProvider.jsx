import React from 'react'
import { createContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from './PokemonContext';
import MOCK_DATA from '../mock';

const PokemonProvider = ({children}) => {

  const [pokemons, setPokemons] = useState(MOCK_DATA)
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const navigate = useNavigate();

  const add = (pokemon)=>{

    if (selectedPokemons.find(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
  }

  if (selectedPokemons.length === 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
  }
  setSelectedPokemons(prev => [...prev, pokemon]);
  }

  const remove = (id)=>{
    setSelectedPokemons(prev => prev.filter(p => p.id !== id))
    }
  
  const goToDetail = id=>{
    navigate(`/detail?id=${id}`)
  }
  return (
    <PokemonContext.Provider value={{ pokemons,selectedPokemons, add, remove, goToDetail }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
