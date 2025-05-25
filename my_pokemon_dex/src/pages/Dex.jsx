import React from 'react'
import MOCK_DATA from '../mock'
import styled from 'styled-components';
import pokeballImg from "../assets/pokeball.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const StLayout = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const StDashboard = styled.div`
    background-color: #f7f6f3;
    display:flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column; 
`;

const StDbPokemon = styled.div`
    width: 100%;
    display: flex;
    margin: 10px;
    padding: 20px;   
    justify-content: center; 
    align-items: center;
`;

const Pokeball = styled.div`
    flex: 0 0 60px; 
    margin: 20px;
    padding: 15px;
    border: 2px dotted grey;
    border-radius: 10px;
    background-color: white;
    img {
        width: 100%;
        height: auto;
      }
`;

const StListContainer = styled.div`
    gap: 16px; 
    display: flex;
    flex-wrap: wrap;           
    justify-content: center;   
    padding: 10px;
    background-color: #a5aaa3; 
`;

const StCard = styled.div`
    border: 1px solid gray;
    flex: 1 1 calc(50% - 20px);   
    max-width: 180px;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    background-color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;    
`;

const StPlusButton = styled.button`
    width: auto;
    padding: 5px 10px;
    border-radius: 8px;
    display: flex;
    margin: 20px;
    background-color: red;
    align-items: center;
    justify-content: center;
    color: white;
    font-size:15px;
`;

const StMyPokemonText = styled.h2`
    color: red;
    font-style: bold;
    font-size: 30px;
`;

const StCardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Dashboard = ({ selected, onRemove }) => {
    return (
        <StDashboard>
            <StMyPokemonText>나만의 포켓몬</StMyPokemonText>
            <StDbPokemon>
                {Array(6)
                    .fill(null)
                    .map((_, i) => {
                        const poke = selected[i]
                        return poke ? (
                            <PokemonCard
                                key={poke.id}
                                pokemon={poke}
                                onRemove={() => onRemove(poke.id)}
                            />
                        ) : (

                            <Pokeball key={i + '_'}>
                                <img src={pokeballImg} alt="pokeball" />
                            </Pokeball>
                        )
                    })}

            </StDbPokemon>


        </StDashboard>
    )
}

const PokemonCard = ({ pokemon, onAdd, onRemove, onCardClick }) => {
    return (
        <StCard >
            <StCardBody onClick={() => onCardClick(pokemon.id)}>
                <img src={pokemon.img_url} alt="" />
                <h3>{pokemon.korean_name}</h3>
                <p>No. {pokemon.id}</p>
            </StCardBody>
            {
                onAdd ? (
                    <StPlusButton onClick={() => onAdd(pokemon)}>추가</StPlusButton>
                )
                    :
                    (
                        <StPlusButton onClick={() => onRemove(pokemon.id)}>삭제</StPlusButton>
                    )
            }

        </StCard>
    )
}

const PokemonList = ({ onAdd, onCardClick }) => {
    return (
        <StListContainer>
            {MOCK_DATA.map(function (Pokemon) {
                return (
                    <PokemonCard key={Pokemon.id} pokemon={Pokemon} onAdd={onAdd} onCardClick={onCardClick} />
                )
            })}
        </StListContainer>
    )
}

const Dex = () => {

    const [selectedPokemons, setSelectedPokemons] = useState([])
    const navigate = useNavigate();
    const handleAdd = (pokemon) => {

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

    const handleRemove = id => {
        setSelectedPokemons(prev => prev.filter(p => p.id !== id))
    }
    const handleOnCardClick = id => {
        navigate(`/detail?id=${id}`)
    }
    return (
        <StLayout>
            <Dashboard selected={selectedPokemons} onRemove={handleRemove} />
            <PokemonList onAdd={handleAdd} onCardClick={handleOnCardClick} />
        </StLayout>
    )
}

export default Dex