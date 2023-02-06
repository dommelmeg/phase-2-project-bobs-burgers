import React from "react";
import { Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import BurgerCards from "./BurgerCards";

const Burgers = ({ burgers }) => {
  return (
    <Stack m={10}>
      <Box m={2}>
        <Heading color='red.600' size='2xl'>Burger of the Day Suggestions</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
        {burgers.map((burger) => {
          return (
            <BurgerCards key={burger.id} burger={burger} />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Burgers
