import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react"
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../cartWidget/CartWidget';
import "./NavBar.css";

const NavBar = () => {
  return (

<div className='navbar'>

    <div className='logo'>

    </div>
 
    <Menu>
  <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
    Productos
  </MenuButton>
  <MenuList>
    <MenuItem>Variedades</MenuItem>
    <MenuItem>Historia</MenuItem>
    <MenuItem>Fotos</MenuItem>
    <MenuItem>Quienes Somos</MenuItem>
  </MenuList>
</Menu>

    <CartWidget/>

</div>
  )
}

export default NavBar