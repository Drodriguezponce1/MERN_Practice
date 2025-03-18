import { Box, Heading, Image, useColorModeValue, Text, HStack, IconButton, useToast } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { useMusicStore } from '../store/music';

export const MusicCard = ({ music }) => {

    const textColor = useColorModeValue("gray.600");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteMusic} = useMusicStore();

    const toast = useToast();

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteMusic(id);
        
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
					<IconButton icon={<EditIcon />} colorScheme='blue' />
					<IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(music._id)}colorScheme='red'/>
				</HStack>

            </Box>

        </Box>
    )
}

export default MusicCard