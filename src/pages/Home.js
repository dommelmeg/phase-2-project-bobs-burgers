import React, { useEffect, useState } from "react";
import { Box, Stack } from '@chakra-ui/react'
import BurgerOfTheDayCard from "../components/BurgerOfTheDayCard";
import BurgerForm from "../components/BurgerForm";
import Burgers from "../components/Burgers";

const Home = () => {
  const [randomBurger, setRandomBurger] = useState([])
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    const min = Math.ceil(1);
    const max = Math.floor(333);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    
    fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomNumber}`)
      .then((r) => r.json())
      .then((burger) => setRandomBurger(burger))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/burgers')
      .then((r) => r.json())
      .then((burgers) => setBurgers(burgers))
  },[])

  return (
    <Stack>
      <Box 
        w='100%' 
        h='100%' 
        display='flex' 
        justifyContent='center'
      >
        <Stack>
          <BurgerOfTheDayCard randomBurger={randomBurger} />
          <BurgerForm
            setBurgers={setBurgers} 
            burgers={burgers}
          />
        </Stack>
      </Box>
      <Box>
        <Burgers burgers={burgers} />
      </Box>
    </Stack>
  )
}

export default Home
