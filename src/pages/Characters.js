import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'

const Characters = ({ nineCharacters, allCharacters }) => {
  
  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Characters</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {nineCharacters.map((character) => {
          return (
            <CharacterCard key={character.id} character={character} />
            )
          })}
      </SimpleGrid>
    </Stack>
  )
}

export default Characters
