import React from "react";
import closedBurger from '../images/closedBurgerLogo.png'
import openBurger from '../images/openBurgerLogo.png'
import { Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box background='yellow.100'>
      <Tabs colorScheme='red' minW='200'>
        <TabList justifyContent='space-evenly'>
          <Tab width='lg'>
            <Image src={closedBurger} alt='closed burger logo' width='100px' />
          </Tab>
          <Tab width='lg'>Burgers</Tab>
          <Tab width='lg'>Characters</Tab>
          {/* <Tab>Episoides</Tab>
          <Tab>Stores Next Door</Tab> */}
          <Tab width='lg'>Oh My Babies!</Tab>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default NavBar
