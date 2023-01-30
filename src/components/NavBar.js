import React from "react";
import burger from '../images/closedBurgerLogo.png'
import { Image, Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box display='grid' width='100' background='yellow.100'>
    <Tabs colorScheme='red'>
      <TabList justifyContent='space-evenly'>
        <Tab><Image src={burger} alt='closed burger logo' width='100px' /></Tab>
        <Tab>Episodes</Tab>
        <Tab>Characters</Tab>
        <Tab>Stores Next Door</Tab>
        <Tab>Burger of the Day</Tab>
        <Tab>Oh My Babies!</Tab>
      </TabList>
    </Tabs>
    </Box>
  )
}

export default NavBar
