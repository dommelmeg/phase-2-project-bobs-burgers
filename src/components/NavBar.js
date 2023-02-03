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
            <Tab width='lg'>
          <NavLink
            to='/'
            exact
          >
              <Image src={closedBurger} alt='closed burger logo' width='100px' />
          </NavLink>
            </Tab>
            <Tab width='lg'>
          <NavLink
            to='/burgers'
            exact
          >
              Burgers
          </NavLink>
            </Tab>
            <Tab width='lg'>
          <NavLink
            to='/characters'
            exact
          >
              Characters
          </NavLink>
            </Tab>
            <Tab width='lg'>
          <NavLink
            to='/ohmybabies'
          >
              Oh My Babies!
          </NavLink>
            </Tab>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default NavBar
