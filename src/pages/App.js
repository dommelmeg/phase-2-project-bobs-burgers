import React, { useState, useEffect } from "react";
import { ChakraProvider, Image, Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Characters from "./Characters";
import OhMyBabies from "./OhMyBabies";
import Burgers from "./Burgers";

function App() {
  const [allCharacters, setAllCharacters] = useState([])
  const [nineCharacters, setNineCharacters] = useState([])
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  
  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/')
      .then((r) => r.json())
      .then((characters) => setAllCharacters(characters))
  }, [])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/[1,2,3,4,5,6,7,8,9]')
      .then((r) => r.json())
      .then((characters) => setNineCharacters(characters))
    }, [])

  return (
    <ChakraProvider>
      <Box overflowX='hidden' w='100%' h='100%'>
        <NavBar />

        <Switch>
          <Route path='/burgers'>
            <Burgers />
          </Route>
          <Route path='/characters'>
            <Characters nineCharacters={nineCharacters} allCharacters={allCharacters} setFavoriteCharacters={setFavoriteCharacters} favoriteCharacters={favoriteCharacters} />
          </Route>
          <Route path='/ohmybabies'>
            <OhMyBabies favoriteCharacters={favoriteCharacters} setFavoriteCharacters={setFavoriteCharacters} />
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
