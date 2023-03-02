import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import styled from 'styled-components'
import logo from '../../assets/pokelogo.png'

const NavBar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return 
    navigate(`/search?q=${search}`);
    setSearch("");
  }

    return (
        <Nav id="navbar">
          <Link to='/'>
            <Logo src={logo} alt="logo pokemon"/>
          </Link>
          <Form onSubmit={handleSubmit}>
           <Input 
              type="text" 
              placeholder="Buscar Pokemon" 
              onChange={(e) => setSearch(e.target.value)} 
              value={search}/>
           <ButtonSubmit type="submit">
               <BiSearchAlt2/>
           </ButtonSubmit>
          </Form>
      </Nav>
    )
}
const Logo = styled.img`
  max-width:300px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  padding: 1rem 2rem;
`
const Form = styled.form`
  display: flex;
  gap:.5rem;
  padding:3rem;
`
const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`
const ButtonSubmit = styled.button`
  background-color: #5341d0;
  background-image: linear-gradient(43deg, #5341d0 0%, #7970ff 99%);
  border: 2px solid rgba(15, 3, 46, 0.658);
  border-radius: 4px;
  padding:0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .4s;
  &:hover {
  background-color: transparent;
  background-image: none;
  }
`
export default NavBar