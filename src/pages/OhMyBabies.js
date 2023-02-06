import React from "react";
import { Image, Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import FavoriteCharacterCard from "../components/FavoriteCharacterCard";
import CharacterCard from "../components/CharacterCard";


const OhMyBabies = ({ favoriteCharacters, setFavoriteCharacters, isFavorite, setIsFavorite }) => {

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
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
            />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default OhMyBabies
