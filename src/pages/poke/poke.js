import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import styled from 'styled-components'
import variables from '../../variables'
import { useParams } from "react-router-dom"
import AbilityInfo from '../../components/info/abilityInfo'

const Poke = () => {
    
  const {id} = useParams()
  const [pokeInfo, setPokeInfo] = useState([])

  const getInfo = async (url) => {
      const res = await fetch(url)
      const data = await res.json() 
      setPokeInfo(data) 
  }

  useEffect(() => {
      const infoUrl = `${variables.apiURL}/${id}`
      getInfo(infoUrl)
  }, [])
  
  const name = pokeInfo?.species?.name
  const imageUrl = pokeInfo?.sprites?.other?.dream_world?.front_default

  let moves = pokeInfo?.moves
  let moveList;
  if (moves) {
    moveList = moves.map((moveObj, index) => {
     const moveName = moveObj.move.name
     return <P key={index}>{moveName}</P>
    })
  };
   
  let types = pokeInfo?.types
  let type;
  if (types) {
    type = types.map((type, index) => {
      const typeName = type.type.name
      return <h3 key={index}>{typeName} </h3>
    })
  }
  
  return (
      <>
      <Section>
        <Move>
            <Movimentos> Movimentos</Movimentos>
          <MoveList> 
            {moveList} 
          </MoveList>
        </Move>
        <Card>
          <Image src={imageUrl} alt="imagem pokemon" />
          <Name> {name} </Name>
          <Type> {type} </Type>
          
        </Card>
        <Habilities>
          <Habilidades>Habilidades</Habilidades>
          <AbilityInfo abilities={pokeInfo.abilities}/>
        </Habilities>
      </Section>
      <DivLink>
        <Link to={"/"}>Voltar a pagina inicial</Link>
      </DivLink>
      </>
   )
 }

const Section = styled.div`
  display:flex;
  padding:3rem;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  gap:2rem;
`
const Move = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
  border: dotted 2px #efe6e6;
  padding:1rem;
`
const MoveList = styled.div`
  display:flex;
  flex-wrap:wrap;
  max-height:100%;
  
`
const P = styled.p`
color:#efe6e6;
line-height:1.5;
text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const Movimentos = styled.h2`
  margin-bottom: 1rem;;
  text-align:center;
  color:#efe6e6;
  text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const Habilidades = styled.h2`
   margin-bottom: 30px;
   color:#efe6e6;
   font-weight:bold;
   text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const Card = styled.div`
  display:flex;
  flex-direction:column;
  width:50%;
  gap:0.5rem;
  align-items:center; 
`
const Image = styled.img`
  width:80%;
  padding:1.5rem;
`
const Type = styled.p`
  font-size:14px;
  color:#efe6e6;
  text-align:inherit;
  text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const Name = styled.h1`
color:#a1e0c5;
text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`
const Habilities = styled.div`
  display:flex;
  flex-direction:column;
  border: dotted 2px #efe6e6;
  padding:1rem;
  align-items:center;
  width:50%;
  gap:5px;
`
const DivLink = styled.div`
  padding-left:30px;
`

export default Poke