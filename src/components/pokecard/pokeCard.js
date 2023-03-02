import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import variables from '../../variables'
import styled from 'styled-components'

const Card = ({name}) => {

    const [poke, setPoke] = useState(null)

    const getPokemon = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setPoke(data)
    };

    useEffect(() => {
        const pokeURL = `${variables.apiURL}/${name}`
        getPokemon(pokeURL)
     }, [])

    const id = poke?.id
    let imageUrl = poke?.sprites?.other?.dream_world?.front_default

      return (
        <CardPokemon>
           <Link to={`/Pokemon/${id}`}>
             <PokemonImg src={imageUrl} alt="imagem pokemon" />
           </Link>
           <Name>{name}</Name>
        </CardPokemon>
    )
}

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 ;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  background-color: #FA8BFF;
  background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 18%, #2BFF88 68%);
  min-width: 160px;
  text-align: center;
  box-shadow: 2px 7px 19px -7px rgba(0,0,0,0.75);
  transition: all 0.2s ease-in-out;
  &:hover {
  transform: scale(1.3);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}`
const Name = styled.h2`
  color:#625dbf ;
  font-size: 22px;
`
const PokemonImg = styled.img`
  width: 120px;
  height: 120px;
`

export default Card 