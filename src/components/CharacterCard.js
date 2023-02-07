import React, { useContext } from "react";
import { Card, CardBody, CardFooter, Image, Box, Stack, Text, Heading, StackDivider } from '@chakra-ui/react'
import FavoriteBtn from "./FavoriteBtn";

const CharacterCard = ({ character }) => {
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
            <FavoriteBtn character={character} />
          </CardFooter>
        </Stack>
      </Card>
  )
}

export default CharacterCard
   