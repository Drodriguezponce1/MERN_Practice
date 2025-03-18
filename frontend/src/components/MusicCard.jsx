import { Box, Heading, Image, useColorModeValue, Text, HStack, IconButton, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, useDisclosure, Button, ModalFooter } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { useMusicStore } from '../store/music';

export const MusicCard = ({ music }) => {

    const textColor = useColorModeValue("gray.600");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteMusic, updateMusic } = useMusicStore();

    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [updatedMusic, setNewMusic] = React.useState({
        name: music.name,
        artist: music.artist,
        genre: music.genre,
        year: music.year,
        price: music.price,
        format: music.format,
        image: music.image,
    });

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteMusic(id);

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
    }

    

    const handleUpdateMusic = async (id, updatedMusic) => {
        const {success, message} = await updateMusic(id, updatedMusic);

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
        onClose();
    }

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image src={music.image} alt={music.name} h={48} w='full' objectFit={'cover'} />

            <Box p={4}>
                <Heading as={"h3"} size={"md"} fontSize={'xl'} color={textColor}>
                    {music.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {music.artist}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {music.genre}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {music.year}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${music.price}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {music.format}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(music._id)} colorScheme='red' />
                </HStack>

            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Music</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Name (Ex: Album Name)'
                                name='name'
                                value ={updatedMusic.name}
                                onChange={(e) => setNewMusic({ ...updatedMusic, name: e.target.value })}
                            />
                            <Input
                                placeholder='Artist'
                                name='artist'
                                value ={updatedMusic.artist}
                                onChange={(e) => setNewMusic({ ...updatedMusic, artist: e.target.value })}
                            />
                            <Input
                                placeholder='Genre'
                                name='genre'
                                value ={updatedMusic.genre}
                                onChange={(e) => setNewMusic({ ...updatedMusic, genre: e.target.value })}
                            />
                            <Input
                                placeholder='Year'
                                name='year'
                                type='number'
                                value ={updatedMusic.year}
                                onChange={(e) => setNewMusic({ ...updatedMusic, year: e.target.value })}

                            />
                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                value ={updatedMusic.price}
                                onChange={(e) => setNewMusic({ ...updatedMusic, price: e.target.value })}

                            />
                            <Input
                                placeholder='Format (Ex: CD, Vinyl, Digital)'
                                name='format'
                                value ={updatedMusic.format}
                                onChange={(e) => setNewMusic({ ...updatedMusic, format: e.target.value })}
                            />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value ={updatedMusic.image}
                                onChange={(e) => setNewMusic({ ...updatedMusic, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter isCentered = 'true'>
                        <Button colorScheme='blue' variant='outline' mr={3}  onClick={() => handleUpdateMusic(music._id, updatedMusic)}>
                            Update
                        </Button>
                        <Button colorScheme='teal' variant='outline' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>

        </Box>
    )
}

export default MusicCard