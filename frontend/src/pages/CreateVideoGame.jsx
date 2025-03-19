import React from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'

const CreateVideoGame = () => {
  return (
    <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create Video Game Resource</Heading>
               
                <Box w={"full"} p={6} rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Name (Ex: Game Name)'
                            name='name'
                            
                        />
                        <Input
                            placeholder='Platform'
                            name='platform'
                            
                        />
                        <Input
                            placeholder='Rate'
                            name='rate'
                            
                        />
                        <Input
                            placeholder='Publisher'
                            name='publisher'
                            
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

                        <Button colorScheme="yellow" size="lg" >Create Video Game Resource</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateVideoGame