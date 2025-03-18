import React, { useState } from 'react'
import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react"
import {useMusicStore} from "../store/music"
import { useToast } from '@chakra-ui/react'

const CreateMusicPage = () => {
    const [newMusic, setNewMusic] = useState({
        name: "",
        artist: "",
        genre: "",
        year: "",
        price: "",
        format: "",
        image: "",
    });

    const toast = useToast()

    const {createMusic} = useMusicStore()

    const HandleAddMusic = async () => {
        const { success, message } = await createMusic(newMusic);
       
        if(!success) {
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } else {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
        }

        setNewMusic({
            name: "",
            artist: "",
            genre: "",
            year: "",
            price: "",
            format: "",
            image: "",
        });
    }

    

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create Music Resource</Heading>
               
                <Box w={"full"} p={6} rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Name (Ex: Album Name)'
                            name='name'
                            value={newMusic.name}
                            onChange={(e) => setNewMusic({ ...newMusic, name: e.target.value })}
                        />
                        <Input
                            placeholder='Artist'
                            name='artist'
                            value={newMusic.artist}
                            onChange={(e) => setNewMusic({ ...newMusic, artist: e.target.value })}
                        />
                        <Input
                            placeholder='Genre'
                            name='genre'
                            value={newMusic.genre}
                            onChange={(e) => setNewMusic({ ...newMusic, genre: e.target.value })}
                        />
                        <Input
                            placeholder='Year'
                            name='year'
                            type='number'
                            value={newMusic.year}
                            onChange={(e) => setNewMusic({ ...newMusic, year: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newMusic.price}
                            onChange={(e) => setNewMusic({ ...newMusic, price: e.target.value })}
                        />
                        <Input
                            placeholder='Format (Ex: CD, Vinyl, Digital)'
                            name='format'
                            value={newMusic.format}
                            onChange={(e) => setNewMusic({ ...newMusic, format: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newMusic.image}
                            onChange={(e) => setNewMusic({ ...newMusic, image: e.target.value })}
                        /> 

                        <Button colorScheme="yellow" size="lg" onClick={HandleAddMusic}>Create Music Resource</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}


export default CreateMusicPage
