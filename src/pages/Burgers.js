import React, { useState, useEffect } from "react";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import BurgerCards from "../components/BurgerCards";

const Burgers = () => {
  const [Burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3,4,5,6,7,8,9,10,11,12]')
      .then((r) => r.json())
      .then((burgers) => setBurgers(burgers))
  },[])

  return (
    <Stack m={10}>
      <Box>
        <Heading color='red.500' size='2xl'>Burgers</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
        {Burgers.map((burger) => {
          return (
            <BurgerCards key={burger.id} burger={burger} />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Burgers
