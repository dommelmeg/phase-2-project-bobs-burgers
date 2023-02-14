import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]')
      .then((r) => r.json())
      .then((characters) => setCharacters(characters))
    }, [])

  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Characters</Heading>
      </Box>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {characters.map((character) => {
          return (
            <CharacterCard 
              key={character.id} 
              character={character}
            />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Characters
