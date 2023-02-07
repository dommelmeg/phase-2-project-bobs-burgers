import React from "react";
import { Box, Tab } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <Tab padding='0' width='100%'>
    <NavLink
      style={{ height: '100%', width: '100%' }}
      to={to}
      exact
    >
      <Box
        height='100%'
        width='100%'
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        alignContent='center'
      >
        {children}
      </Box>
    </NavLink>
  </Tab>
)

export default NavItem