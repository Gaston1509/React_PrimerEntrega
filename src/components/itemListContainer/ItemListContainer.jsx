import { Heading } from '@chakra-ui/react'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({title}) => {
  return (
    <div className='titulo'>
        <Heading>
            {title}
        </Heading>
    </div>
  )
}

export default ItemListContainer