import { Container, Flex, HStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { RiMenuAddFill } from "react-icons/ri";
import { IoMdBookmarks } from "react-icons/io";
import { TbCards } from "react-icons/tb";
import { TfiGame } from "react-icons/tfi";



const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, yellow.400, red.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Danny's Collection 💥</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>

                    <Link to={"/createMusic"}>
                        <Button>
                            <RiMenuAddFill fontSize={20}/>
                        </Button>
                    </Link>

                    <Link to={"/createManga"}>
                        <Button>
                            <IoMdBookmarks  fontSize={20}/>
                        </Button>
                    </Link>

                    <Link to={"/createTradingCards"}>
                        <Button>
                            <TbCards  fontSize={20}/>
                        </Button>
                    </Link>

                    <Link to={"/createVideoGame"}>
                        <Button>
                            <TfiGame   fontSize={20}/>
                        </Button>
                    </Link>
                </HStack>

                
            </Flex>
        </Container>
    );

};

export default Navbar;
