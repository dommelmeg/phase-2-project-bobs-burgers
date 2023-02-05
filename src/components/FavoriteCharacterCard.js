import React from "react";
import { Card, CardBody, CardFooter, Image, Box, Stack, Text, Heading, Button, Link, StackDivider } from '@chakra-ui/react'


const FavoriteCharacterCard = ({ favoriteCharacter, setFavoriteCharacters, favoriteCharacters }) => {
  const handleUnfavoriteBtn = () => {
    const filterFavorites = favoriteCharacters.filter((character) => character.id !== favoriteCharacter.id)
    setFavoriteCharacters(filterFavorites)
  }

  return (
    <Card 
      size='lg'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      background='pink.50'
    >
      <Image 
        src={favoriteCharacter.image}
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        alt={favoriteCharacter.name}
        crossOrigin="anonymous"
      />
      <Stack>
        <CardBody>
          <Stack divider={<StackDivider borderColor='pink.500' />} spacing='4'>
            <Box>
              <Heading size='lg'>{favoriteCharacter.name}</Heading>
              <Text>{favoriteCharacter.occupation}</Text>
            </Box>
            <Box>
              <Text><b>Gender:</b> {favoriteCharacter.gender}</Text>
              <Text><b>Hair Color:</b>{favoriteCharacter.hairColor}</Text>
            </Box>
            <Box>
              <Heading size='sm'>Voice Actor:</Heading>
              <Text>{favoriteCharacter.voicedBy}</Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack>
            <Button onClick={handleUnfavoriteBtn} variant='outline' colorScheme='pink'>
              Unfavorite
            </Button>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default FavoriteCharacterCard
