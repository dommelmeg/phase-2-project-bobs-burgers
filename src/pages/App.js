import React, { useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Characters from "./Characters";
import OhMyBabies from "./OhMyBabies";

function App() {
  const [characters, setCharacters] = useState([])
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  
  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]')
      .then((r) => r.json())
      .then((characters) => setCharacters(characters))
    }, [])

  return (
    <ChakraProvider>
      <Box overflowX='hidden' w='100%' h='100%'>
        <NavBar />

        <Switch>
          <Route path='/characters'>
            <Characters 
              characters={characters} 
              setFavoriteCharacters={setFavoriteCharacters} 
              favoriteCharacters={favoriteCharacters} />
          </Route>
          <Route path='/ohmybabies'>
            <OhMyBabies 
              favoriteCharacters={favoriteCharacters} 
              setFavoriteCharacters={setFavoriteCharacters} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

      </Box>
    </ChakraProvider>
  )
}

export default App;
