import React from "react"
import { useState, useEffect } from 'react'
import variables from "../../variables"
import Navbar from "../../components/navbar/Navbar"
import Card from "../../components/pokecard/pokeCard"
import Button from "../../components/button/Button"
import styled from "styled-components"

const Home = () => {

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pokemons, setPokemons] = useState([])
    //const [loadMore, setLoadMore] =

    const getPokemons = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setPokemons(prevPokemons => offset === 0 ? data.results : [...prevPokemons, ...data.results]);
    };

    useEffect(() => {
        // Calcular o novo offset com base no número de pokémons já carregados
        const newOffset = pokemons.length;
        const pokeListURL = `${variables.apiURL}?offset=${newOffset}&limit=${limit}`;
        getPokemons(pokeListURL);
    }, [offset]);

    const handleLoadMore = () => {
        // Atualizar o offset para indicar que mais pokémons devem ser carregados
        setOffset(prevOffset => prevOffset + limit);
    }

    return (
        <>
         <Navbar />
         <Container>
           <Title>Pokemon Evolution</Title>
           <ContainerCard>
             {pokemons === 0 && <p>Carregando...</p>}
             {pokemons.length > 0 && pokemons.map((pokemon) => <Card name = {pokemon.name} key={pokemon.name}/>)}
           </ContainerCard>
           {pokemons.length > 0 && <Button onClick={handleLoadMore} name="Carregar mais"></Button>}
         </Container>
        </>
    )
}

const ContainerCard = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:2rem;
  align-items:center;
  justify-content:center;
  padding-bottom:4rem;
  padding-top:3rem;
`
const Container = styled.div`
  display:flex; 
  flex-direction:column;
  align-items:center;
`
const Title = styled.h2`
  color:#efe6e6;
  font-size: 40px;
  text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`

export default Home