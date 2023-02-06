import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Box, SimpleGrid, Stack, Heading, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Characters = ({ characters, setFavoriteCharacters, favoriteCharacters }) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredCharacters, setFilterCharacters] = useState([])

  const handleSearchBarChange = (e) => {
    setInputValue(e.target.value.toLowerCase())
    onSearch(e.target.value.toLowerCase())
  }


  const onSearch = (inputValue) => {
    if (inputValue === '') {

    }
  }
  
  return (
    <Stack m={10}>
      <Box>
        <Heading color='yellow.500' size='2xl'>Characters</Heading>
      </Box>

      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input 
          type='text' 
          placeholder='Character Name' 
          onChange={handleSearchBarChange}
          value={inputValue}
        />
      </InputGroup>

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
