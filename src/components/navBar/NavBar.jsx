import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react"
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../cartWidget/CartWidget';
import "./NavBar.css";

const NavBar = () => {
  return (

<div className='navbar'>

    <div className='logo'>
        <img src='./src/assets/logoBuho.png' className='logonav'/>
    </div>
 
    <Menu>
  <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
    Variedades
  </MenuButton>
  <MenuList>
    <MenuItem>Dorada Pampena</MenuItem>
    <MenuItem>Kolsh</MenuItem>
    <MenuItem>Golden</MenuItem>
    <MenuItem>Irish Red</MenuItem>
  </MenuList>
</Menu>

    <CartWidget/>

</div>
  )
}

export default NavBar