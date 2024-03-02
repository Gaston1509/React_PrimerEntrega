import { Heading } from '@chakra-ui/react'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({tittle}) => {
  return (
    <div className='titulo'>
        <Heading>
            {tittle}
        </Heading>
    </div>
  )
}

export default ItemListContainer