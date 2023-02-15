import React, { useState } from "react";
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody, 
  ModalCloseButton, 
  useDisclosure, 
  Button, 
  FormControl, 
  FormLabel, 
  Input 
} from '@chakra-ui/react'


const BurgerForm = ({ setBurgers, burgers}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [burgerInput, setBurgerInput] = useState('')
  const [priceInput, setPriceInput] = useState('')

  const handleBurgerChange = (e) => {
    setBurgerInput(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPriceInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name: burgerInput,
      price: priceInput,
    }

    fetch('http://localhost:3001/burgers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((burger) => setBurgers([...burgers, burger]))

    setBurgerInput('')
    setPriceInput('')
    onClose()
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button 
        colorScheme='red'
        size='lg'
        onClick={onOpen}
      >
        FRY UP A NEW BURGER
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Burger of the Day</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input 
                ref={initialRef}
                placeholder='Burger of the Day'
                onChange={handleBurgerChange}
                type="text"
                value={burgerInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input 
                placeholder='$5.95'
                onChange={handlePriceChange}
                type="text"
                value={priceInput}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              colorScheme='red' 
              mr={3}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BurgerForm
