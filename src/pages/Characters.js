import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { Box, SimpleGrid, Stack, Heading, Input } from '@chakra-ui/react'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/')
      .then((r) => r.json())
      .then((characters) => setCharacters(characters))
    }, [])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const searchCharacters = characters.filter((character) => character.name.toLowerCase().includes(inputValue))

  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl' paddingBottom='10'>Characters</Heading>
        <Input placeholder='Character Name' focusBorderColor='yellow.500' onChange={handleInputChange} />
      </Box>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {searchCharacters.map((character) => {
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
