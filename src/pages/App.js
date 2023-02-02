import React from "react";
import { ChakraProvider, Image, Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Characters from "./Characters";
import OhMyBabies from "./OhMyBabies";


function App() {

  return (
    <ChakraProvider>
      <Box overflowX='hidden' w='100%' h='100%'>
        <NavBar />
        <Home />
        <Characters />
        <OhMyBabies />
      </Box>
    </ChakraProvider>
  )
}

export default App;
