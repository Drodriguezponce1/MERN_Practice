import React, { useState } from 'react'
import { Container, VStack, Heading, Box, useColorModeValue, Select, Input } from "@chakra-ui/react"

const CreateMusic = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
                <Select size="sm" width="320px" onChange={handleCategoryChange}>
                    {collection.map((item, index) => (
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </Select>

                <Box w={"full"} bg={useColorModeValue("white", "red.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Input
                            placeholder='Year'
                            name='year'
                            value={newProduct.year}
                            onChange={(e) => setNewProduct({ ...newProduct, year: e.target.value })}
                        />
                        
                        {selectedCategory === "Music" && (
                            <Box w={"full"} bg={useColorModeValue("white", "red.800")} p={6} rounded={"lg"} shadow={"md"}>
                                <Input
                                    placeholder='Artist'
                                    name='artist'
                                    value={newProduct.artist || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, artist: e.target.value })}
                                />
                                <Input
                                    placeholder='Genre'
                                    name='genre'
                                    value={newProduct.artist || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, genre: e.target.value })}
                                />
                                <Input
                                    placeholder='Genre'
                                    name='artist'
                                    value={newProduct.artist || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, artist: e.target.value })}
                                />
                            </Box>
                        )}
                        {selectedCategory === "Manga" && (
                            <Input
                                placeholder='Author'
                                name='author'
                                value={newProduct.author || ""}
                                onChange={(e) => setNewProduct({ ...newProduct, author: e.target.value })}
                            />
                        )}
                        {selectedCategory === "Trading Cards" && (
                            <Input
                                placeholder='Card Type'
                                name='cardType'
                                value={newProduct.cardType || ""}
                                onChange={(e) => setNewProduct({ ...newProduct, cardType: e.target.value })}
                            />
                        )}
                        {selectedCategory === "Video Games" && (
                            <Input
                                placeholder='Platform'
                                name='platform'
                                value={newProduct.platform || ""}
                                onChange={(e) => setNewProduct({ ...newProduct, platform: e.target.value })}
                            />
                        )}
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

const collection = [
    { label: "Music" },
    { label: "Manga" },
    { label: "Trading Cards" },
    { label: "Video Games" },
]

export default CreateMusic
