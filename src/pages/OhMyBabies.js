import React from "react";
import { Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import CharacterCard from "../components/CharacterCard";


const OhMyBabies = ({ favoriteCharacters, setFavoriteCharacters }) => {

  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Oh My Babies!</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {favoriteCharacters.map((favoriteCharacter) => {
          return (
            <CharacterCard 
              key={favoriteCharacter.name} 
              character={favoriteCharacter} 
              setFavoriteCharacters={setFavoriteCharacters} 
              favoriteCharacters={favoriteCharacters} 
            />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default OhMyBabies
