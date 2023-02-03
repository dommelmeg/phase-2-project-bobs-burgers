import React from "react";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import FavoriteCharacterCard from "../components/FavoriteCharacterCard";


const OhMyBabies = ({ favoriteCharacters, setFavoriteCharacters }) => {

  return (
    <Stack m={10}>
      <Box>
        <Heading color='pink.500' size='2xl'>Oh My Babies</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {favoriteCharacters.map((favoriteCharacter) => {
          return (
            <FavoriteCharacterCard 
              key={favoriteCharacter.id} 
              favoriteCharacter={favoriteCharacter} 
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
