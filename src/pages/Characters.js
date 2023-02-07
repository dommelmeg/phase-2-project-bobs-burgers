import React from "react";
import CharacterCard from "../components/CharacterCard";
import { Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'

const Characters = ({ characters, setFavoriteCharacters, favoriteCharacters }) => {
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
              setFavoriteCharacters={setFavoriteCharacters} 
              favoriteCharacters={favoriteCharacters}
            />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Characters
