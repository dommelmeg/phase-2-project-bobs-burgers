import React from "react";
import closedBurger from '../images/closedBurgerLogo.png'
import openBurger from '../images/openBurgerLogo.png'
import { Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Link } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box background='yellow.100'>
      <Tabs colorScheme='red' minW='200'>
        <TabList justifyContent='space-evenly'>
          <NavLink
            to='/'
            exact
          >
            <Tab width='lg'>
              <Image src={closedBurger} alt='closed burger logo' width='100px' />
            </Tab>
          </NavLink>
          <NavLink
            to='/burgers'
            exact
          >
            <Tab width='lg'>Burgers</Tab>
          </NavLink>
          <NavLink
            to='/characters'
            exact
          >
            <Tab width='lg'>Characters</Tab>
          </NavLink>
          <NavLink
            to='/ohmybabies'
          >
            <Tab width='lg'>Oh My Babies!</Tab>
          </NavLink>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default NavBar
