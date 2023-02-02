import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Box, Stack, Text, Heading, Button, Flex, Avatar, SimpleGrid, StackDivider } from '@chakra-ui/react'


const BurgerCards = ({ burger }) => {
  return (
    <Card 
      size='lg'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      background='red.50'
    >
      <Stack>
        <CardBody>
          <Stack 
            spacing='auto'
          >
            <Box height='36'>
              <Heading size='lg'>{burger.name}</Heading>
              <Text size='2xl'>{burger.price}</Text>
            </Box >
            <Box>
              <Text 
                color='red.600'
              >
                Season: {burger.season} | Episode: {burger.episode}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default BurgerCards
