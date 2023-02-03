import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Box, Stack, Text, Heading, Button, Flex, Avatar, SimpleGrid, StackDivider } from '@chakra-ui/react'

const CharacterCard = ({ character, favoriteCharacters, setFavoriteCharacters }) => {
  const handleFavoriteBtn = () => {
    console.log(character)
    setFavoriteCharacters([...favoriteCharacters, character])
  }


  return (
      <Card 
        size='lg'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        background='yellow.50'
      >
        <Image 
          src={character.image}
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          alt={character.name}
          crossOrigin="anonymous"
        />
        <Stack>
          <CardBody>
            <Stack divider={<StackDivider borderColor='yellow.500' />} spacing='4'>
              <Box>
                <Heading size='lg'>{character.name}</Heading>
                <Text>{character.occupation}</Text>
              </Box>
              <Box>
                <Heading size='sm'>Voice Actor:</Heading>
                <Text>{character.voicedBy}</Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button onClick={handleFavoriteBtn} variant='outline' colorScheme='yellow'>
              Favorite
            </Button>
          </CardFooter>
        </Stack>
      </Card>
  )
}

export default CharacterCard
   