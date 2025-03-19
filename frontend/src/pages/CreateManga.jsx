import React from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'

const CreateManga = () => {
  return (
    <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create Manga Resource</Heading>
               
                <Box w={"full"} p={6} rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Name (Ex: Manga Title)'
                            name='name'
                            
                        />
                        <Input
                            placeholder='Author'
                            name='author'
                            
                        />
                        <Input
                            placeholder='Publisher'
                            name='publisher'
                            
                        />
                        <Input
                            placeholder='Genre'
                            name='genre'
                            
                        />
                        <Input
                            placeholder='Year'
                            name='year'
                            type='number'
                            
                        />
                        <Input
                            placeholder='Pages'
                            name='pages'
                            type='number'
                            
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            
                        />
                        
                        <Input
                            placeholder='Image URL'
                            name='image'
                            
                        /> 

                        <Button colorScheme="yellow" size="lg" >Create Manga Resource</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateManga