import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading } from '@chakra-ui/react'


const BurgerCards = ({ burger }) => {
  return (
    <Card 
      size='lg'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      background='blackAlpha.700'
    >
      <Stack>
        <CardBody>
          <Stack 
            spacing='auto'
          >
            <Box >
              <Heading color='white' size='lg'>{burger.name}</Heading>
              <Text color='white' size='2xl'>{burger.price}</Text>
            </Box >
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default BurgerCards
