import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading } from '@chakra-ui/react'


const BurgerCards = ({ burger }) => {
  return (
    <Card 
      size='sm'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      background='red.50'
    >
      <CardBody>
        <Stack 
          spacing='auto'
        >
          <Box>
            <Heading size='lg'>{burger.name}</Heading>
            <Text size='2xl'>{burger.price}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default BurgerCards
