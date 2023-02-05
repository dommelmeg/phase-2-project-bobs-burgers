import React from "react";
import { Card, CardBody, Image, Box, Stack, Text, Heading } from '@chakra-ui/react'
import burgerOfDay from '../images/bobs_burgers_burgerOfTheDay.png'

const BurgerOfTheDayCard = ({ randomBurger }) => {

  return (
    <Box justifyContent='center'>
      <Stack 
        mt='6' 
        spacing='3'
      >
        <Card variant='elevated' maxW='xl'>
          <CardBody align='center'>
            <Image 
              src={burgerOfDay} 
              alt='Burger of the Day' 
              borderRadius='sm'
            />
            <Heading m={4} size='lg'>{randomBurger.name}</Heading>
            <Text 
              fontSize='2xl' 
              color='red.600'
            >
              {randomBurger.price}
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  )
}

export default BurgerOfTheDayCard
