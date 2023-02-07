import React from "react";
import closedBurger from '../images/closedBurgerLogo.png'
import openBurger from '../images/openBurgerLogo.png'
import { Image, Box, Tabs, TabList } from '@chakra-ui/react'
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const NavBar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Box background='yellow.100'>
      <Tabs colorScheme='red'>
        <TabList justifyContent='space-evenly'>
          <NavItem to='/'>
            <Image
              src={isHome ? openBurger : closedBurger}
              alt='closed burger logo'
              height='80px'
              padding='2'
            />
          </NavItem>
          <NavItem to='/characters'>Characters</NavItem>
          <NavItem to='/ohmybabies'>Oh My Babies!</NavItem>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default NavBar
