import { Box, Heading, Image, useColorModeValue, Text, HStack, IconButton, useToast } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
//import { useMangaStore } from '../store/muanga';

export const MangaCard = ({ manga }) => {

	const textColor = useColorModeValue("gray.600");
	const bg = useColorModeValue("white", "gray.800");
	const toast = useToast();

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={manga.image} alt={manga.name} h={48} w='full' objectFit={'cover'} />

			<Box p={4}>
				<Heading as={"h3"} size={"md"} fontSize={'xl'} color={textColor}>
					{manga.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					{manga.author}
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					{manga.publisher}
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					{manga.genre}
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					{manga.year}
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					{manga.pages} pages
				</Text>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${manga.price}
				</Text>

				<HStack spacing={2}>
					<IconButton icon={<EditIcon />}  colorScheme='blue' />
					<IconButton icon={<DeleteIcon />}  colorScheme='red' />
				</HStack>

			</Box>

		</Box>
	)
}

export default MangaCard