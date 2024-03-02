import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './App.css'

function App() {
  
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer tittle='Cerveza Buho Artesanal' />
    </ChakraProvider>
    
  )
}

export default App
