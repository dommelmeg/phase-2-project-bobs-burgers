import React, { useEffect, useState } from "react";
import { Image, Box } from '@chakra-ui/react'
import BurgerCard from "../components/BurgerCard";

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
    <Box w='100%' h='100%' m={5} display='flex' justifyContent='center'>
      <BurgerCard randomBurger={randomBurger} />
    </Box>
  )
}

export default Home
