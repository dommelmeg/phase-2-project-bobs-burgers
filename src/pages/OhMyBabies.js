import React from "react";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import FavoriteCharacterCard from "../components/FavoriteCharacterCard";


const OhMyBabies = ({ favoriteCharacters, setFavoriteCharacters }) => {
  return (
    <Stack m={10}>
      <Box>
        <Heading color='pink.500' size='2xl'>Oh My Babies</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
        {favoriteCharacters.map((character) => {
          return (
            <FavoriteCharacterCard 
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

export default OhMyBabies
