import React from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'

const CreateCards = () => {
  return (
    <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create Trading Card Resource</Heading>
               
                <Box w={"full"} p={6} rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Brand: (Ex: Pokemon)'
                            name='name'
                        />
                        <Input
                            placeholder='Card Name: (Ex: Charizard)'
                            name='name'
                        />
                        <Input
                            placeholder='Set: (Ex: Base Set)'
                            name='set'
                            
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            
                        />
                        <Input
                            placeholder='Year'
                            name='year'
                            type='number' 
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            
                        /> 

                        <Button colorScheme="yellow" size="lg" >Create Trading Card Resource</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateCards