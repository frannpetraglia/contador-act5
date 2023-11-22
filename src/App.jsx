import * as React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ContadorResponsive from './components/ContadorResponsive';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (

      <ChakraProvider>
        <Header />
        <ContadorResponsive />
        <Footer />
      </ChakraProvider>

  )
}

export default App
