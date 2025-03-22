import React, { useState } from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import { useMangaStore } from '../store/manga'
import { useToast } from '@chakra-ui/react'


const CreateManga = () => {

    const [newManga, setNewManga] = useState({
        name: "",
        author: "",
        publisher: "",
        genre: "",
        year: "",
        pages: "",
        price: "",
        image: "",
    });

    const toast = useToast()

    const { createManga } = useMangaStore()

    const HandleAddManga = async () => {
        const { success, message } = await createManga(newManga);

        if (!success) {
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

        setNewManga({
            name: "",
            author: "",
            publisher: "",
            genre: "",
            year: "",
            pages: "",
            price: "",
            image: "",
        });
    }

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create Manga Resource</Heading>

                <Box w={"full"} p={6} rounded={"lg"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Name (Ex: Manga Title)'
                            name='name'
                            value={newManga.name}
                            onChange={(e) => setNewManga({ ...newManga, name: e.target.value })}
                        />
                        <Input
                            placeholder='Author'
                            name='author'
                            value={newManga.author}
                            onChange={(e) => setNewManga({ ...newManga, author: e.target.value })}
                        />
                        <Input
                            placeholder='Publisher'
                            name='publisher'
                            value={newManga.publisher}
                            onChange={(e) => setNewManga({ ...newManga, publisher: e.target.value })}
                        />
                        <Input
                            placeholder='Genre'
                            name='genre'
                            value={newManga.genre}
                            onChange={(e) => setNewManga({ ...newManga, genre: e.target.value })}
                        />
                        <Input
                            placeholder='Year'
                            name='year'
                            value={newManga.year}
                            type='number'
                            onChange={(e) => setNewManga({ ...newManga, year: e.target.value })}
                        />
                        <Input
                            placeholder='Pages'
                            name='pages'
                            type='number'
                            value={newManga.pages}
                            onChange={(e) => setNewManga({ ...newManga, pages: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newManga.price}
                            onChange={(e) => setNewManga({ ...newManga, price: e.target.value })}
                        />

                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newManga.image}
                            onChange={(e) => setNewManga({ ...newManga, image: e.target.value })}
                        />

                        <Button colorScheme="yellow" size="lg" onClick={HandleAddManga}>Create Manga Resource</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreateManga