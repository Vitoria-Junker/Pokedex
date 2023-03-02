import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../../components/pokecard/pokeCard'
import variables from '../../variables'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Search = () => {

    const [searchParams] = useSearchParams ();
    const [pokemon, setPokemon] = useState([])
    const query = searchParams.get("q")

    const getSearchedPokemon = async (url) => {
        const res = await fetch(url)
        const data= await res.json()
        setPokemon(data)
    }

    useEffect (() => {
        const searchWithQueryURL = `${variables.apiURL}/${query}`
        getSearchedPokemon(searchWithQueryURL)
    }, [query])

    // if (!pokemon.length) {
    //     return (
    //       <Container>
    //         <Title>
    //           Nenhum pokemon encontrado para a busca: <span className="queryText">{query}</span>
    //         </Title>
    //         <DivLink>
    //           <Link to={"/"}>Voltar a página inicial</Link>
    //         </DivLink>
    //       </Container>
    //     );
    //   }

    return(
        <>
         <Container>
           <Title> Resultados para: <span className='queryText'>{query}</span> </Title>
           <PokemonContainer>
             <Card name = {pokemon.name} key={pokemon.name}/>
           </PokemonContainer>
         </Container>
         <DivLink>
           <Link to={"/"}>Voltar a pagina inicial</Link>
         </DivLink>
        </>  
    )
}

const Container = styled.div`
    min-height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap:2rem;
`
const PokemonContainer = styled.div`
    width:10%;
`
const Title = styled.h2`
color:#efe6e6;
font-size: 40px;
text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const DivLink = styled.div`
    padding-left:30px;
`

export default Search 