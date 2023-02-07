import React, { useEffect, useState } from "react";
import { Box, Stack } from '@chakra-ui/react'
import BurgerOfTheDayCard from "../components/BurgerOfTheDayCard";
import BurgerForm from "../components/BurgerForm";
import Burgers from "../components/Burgers";

const Home = () => {
  const [burgers, setBurgers] = useState([])

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
          <BurgerOfTheDayCard />
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
