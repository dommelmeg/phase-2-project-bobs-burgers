import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Button, CardFooter } from '@chakra-ui/react'


const BurgerCards = ({ burger }) => {
  return (
    <Card 
      size='sm'
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
            <Box >
              <Heading size='lg'>{burger.name}</Heading>
              <Text size='2xl'>{burger.price}</Text>
            </Box >
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default BurgerCards
