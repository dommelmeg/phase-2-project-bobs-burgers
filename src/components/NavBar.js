import React from "react";
import closedBurger from '../images/closedBurgerLogo.png'
import openBurger from '../images/openBurgerLogo.png'
import { Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box display='grid' background='yellow.100'>
    <Tabs colorScheme='red'>
      <TabList justifyContent='space-evenly'>
        <Tab>
          <Image src={closedBurger} alt='closed burger logo' width='100px' />
        </Tab>
        <Tab>Burger of the Day</Tab>
        <Tab>Episodes</Tab>
        {/* <Tab>Characters</Tab>
        <Tab>Stores Next Door</Tab> */}
        <Tab>Oh My Babies!</Tab>
      </TabList>
    </Tabs>
    </Box>
  )
}

export default NavBar
