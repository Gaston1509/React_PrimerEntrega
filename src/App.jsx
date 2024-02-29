import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import './App.css'

function App() {
  
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}

export default App
