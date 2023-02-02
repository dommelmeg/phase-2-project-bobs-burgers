import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Image, Box, SimpleGrid } from '@chakra-ui/react'

const Characters = () => {
  const [allCharacters, setAllCharacters] = useState([])
  
  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/[1,2,3,4,5,6,7,8,9]')
      .then((r) => r.json())
      .then((characters) => setAllCharacters(characters))
  }, [])
  
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' m={10}>
      {allCharacters.map((character) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </SimpleGrid>
  )
}

export default Characters
