import React, { useState, useEffect } from "react";
import { Card, CardBody, Image, Box, Stack, Text, Heading } from '@chakra-ui/react'
import burgerOfDay from '../images/bobs_burgers_burgerOfTheDay.png'

const BurgerOfTheDayCard = () => {
  const [randomBurger, setRandomBurger] = useState([])

  useEffect(() => {
    const min = Math.ceil(1);
    const max = Math.floor(333);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    
    fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomNumber}`)
      .then((r) => r.json())
      .then((burger) => setRandomBurger(burger))
  }, [])

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
