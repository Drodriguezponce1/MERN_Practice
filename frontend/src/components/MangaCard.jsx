import { Box, Heading, Image, useColorModeValue, Text, HStack, IconButton, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, useDisclosure, Button, ModalFooter } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import "@fontsource/audiowide";
import { useMangaStore } from '../store/manga';

export const MangaCard = ({ manga }) => {

	const textColor = useColorModeValue("gray.600");
	const bg = useColorModeValue("white", "gray.800");
	const { deleteManga, updateManga } = useMangaStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [updatedManga, setNewManga] = React.useState({
		name: manga.name,
		author: manga.author,
		publisher: manga.publisher,
		genre: manga.genre,
		year: manga.year,
		pages: manga.pages,
		price: manga.price,
		image: manga.image,
	});

	const handleDeleteManga = async (id) => {
		const { success, message } = await deleteManga(id);

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

	const handleUpdateManga = async (id, updatedManga) => {
		const { success, message } = await updateManga(id, updatedManga);

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
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					<IconButton icon={<DeleteIcon />} onClick={() => handleDeleteManga(manga._id)}colorScheme='red' />
				</HStack>

			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					<ModalHeader>Update Manga</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Name (Ex: Manga Title)'
								name='name'
								value={updatedManga.name}
								onChange={(e) => setNewManga({ ...updatedManga, name: e.target.value })}
							/>
							<Input
								placeholder='Author'
								name='author'
								value={updatedManga.author}
								onChange={(e) => setNewManga({ ...updatedManga, author: e.target.value })}
							/>
							<Input
								placeholder='Publisher'
								name='publisher'
								value={updatedManga.publisher}
								onChange={(e) => updatedManga({ ...updatedManga, publisher: e.target.value })}
							/>
							<Input
								placeholder='Genre'
								name='genre'
								value={updatedManga.genre}
								onChange={(e) => setNewManga({ ...updatedManga, genre: e.target.value })}
							/>
							<Input
								placeholder='Year'
								name='year'
								value={updatedManga.year}
								type='number'
								onChange={(e) => setNewManga({ ...updatedManga, year: e.target.value })}
							/>
							<Input
								placeholder='Pages'
								name='pages'
								type='number'
								value={updatedManga.pages}
								onChange={(e) => setNewManga({ ...updatedManga, pages: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedManga.price}
								onChange={(e) => setNewManga({ ...updatedManga, price: e.target.value })}
							/>

							<Input
								placeholder='Image URL'
								name='image'
								value={updatedManga.image}
								onChange={(e) => setNewManga({ ...updatedManga, image: e.target.value })}
							/>
						</VStack>
					</ModalBody>

					<ModalFooter iscentered='true'>
						<Button colorScheme='blue' variant='outline' mr={3} onClick={() => handleUpdateManga(manga._id, updatedManga)}>
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

export default MangaCard