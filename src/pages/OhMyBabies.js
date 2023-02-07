import React, { useContext } from "react";
import { Box, SimpleGrid, Stack, Heading } from '@chakra-ui/react'
import CharacterCard from "../components/CharacterCard";
import { FavoriteCharacterContext } from "../context/favoriteCharacters";

const OhMyBabies = () => {
  const { favoriteCharacters } = useContext(FavoriteCharacterContext)

  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Oh My Babies!</Heading>
      </Box>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {favoriteCharacters.map((favoriteCharacter) => {
          return (
            <CharacterCard 
              key={favoriteCharacter.id} 
              character={favoriteCharacter} 
            />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default OhMyBabies
