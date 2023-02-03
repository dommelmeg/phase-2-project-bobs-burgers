import React, { useEffect, useState } from "react";
import { Image, Box, Stack } from '@chakra-ui/react'
import BurgerOfTheDayCard from "../components/BurgerOfTheDayCard";
import BurgerForm from "../components/BurgerForm";

const Home = () => {
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
    <Box w='100%' h='100%' display='flex' justifyContent='center'>
      <Stack>
        <BurgerOfTheDayCard randomBurger={randomBurger} />
        <BurgerForm />
      </Stack>
    </Box>
  )
}

export default Home
