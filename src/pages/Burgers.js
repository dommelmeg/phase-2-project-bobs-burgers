import React, { useState, useEffect } from "react";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import BurgerCards from "../components/BurgerCards";

const Burgers = () => {
  const [nineBurgers, setNineBurgers] = useState([])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3,4,5,6,7,8,9]')
      .then((r) => r.json())
      .then((burgers) => setNineBurgers(burgers))
  },[])

  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Burgers</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {nineBurgers.map((burger) => {
          return (
            <BurgerCards key={burger.id} burger={burger} />
            )
          })}
      </SimpleGrid>
    </Stack>
  )
}

export default Burgers
