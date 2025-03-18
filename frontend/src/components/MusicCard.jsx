import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const MusicCard = ({ music }) => {

    const textColor = useColorModeValue("gray.600");
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
                <Heading as={"h3"} size={"md"} fontSize={'x1'} color={textColor}>
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
					<IconButton icon={<DeleteIcon />} colorScheme='red'/>
				</HStack>

            </Box>

        </Box>
    )
}
