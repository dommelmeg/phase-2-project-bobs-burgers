import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Box, Stack, Text, Heading, Button } from '@chakra-ui/react'
import burgerOfDay from '../images/bobs_burgers_burgerOfTheDay.png'
import BurgerForm from "./BurgerForm";

const BurgerCard = ({ randomBurger }) => {

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
            {/* <Text>Season: {randomBurger.season} | Episode: {randomBurger.episode}</Text> */}
          </CardBody>
        </Card>
        <BurgerForm />
      </Stack>
    </Box>
  )
}

export default BurgerCard
