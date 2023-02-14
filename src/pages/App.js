import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Characters from "./Characters";
import OhMyBabies from "./OhMyBabies";
import { FavoriteCharacterProvider } from "../context/favoriteCharacters";

function App() {
  return (
    <ChakraProvider>
      <Box overflowX='hidden' w='100%' h='100%'>
        <NavBar />
        <FavoriteCharacterProvider>
          <Switch>
            <Route path='/characters'>
              <Characters />
            </Route>
            <Route path='/ohmybabies'>
              <OhMyBabies />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </FavoriteCharacterProvider>
      </Box>
    </ChakraProvider>
  )
}

export default App;
