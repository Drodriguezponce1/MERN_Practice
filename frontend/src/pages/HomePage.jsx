import { Container, HStack, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMusicStore } from "../store/music"
import { useMangaStore } from "../store/manga"
import { MusicCard } from "../components/MusicCard"
import {MangaCard} from "../components/MangaCard"

const HomePage = () => {

  const { fetchMusic, music } = useMusicStore()

  const { fetchManga, manga } = useMangaStore()

  useEffect(() => {
    fetchMusic();
  }, [fetchMusic]);

  console.log("music", music);

  useEffect(() => {
    fetchManga();
  }, [fetchManga]);

  console.log("manga", manga);

  return (
    <Container maxW={"container.xl"} px={12}>

      {Array.isArray(music) && music.length != 0 && (
        <>
          <HStack spacing={1} justifyContent={"center"} py={8}>
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              bgGradient={"linear(to-r, red.400, yellow.500)"}
              bgClip={"text"}
              textAlign={"center"}
            >
              Current Music Collection
            </Text>
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              textAlign={"left"}>🦂</Text>
          </HStack>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >

            {Array.isArray(music) && music.map((music) => (
              <MusicCard key={music._id} music={music} />
            ))}

          </SimpleGrid>
        </>
      )}

      {Array.isArray(manga) && manga.length != 0 && (
        <>
          <HStack spacing={1} justifyContent={"center"} py={8}>
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              bgGradient={"linear(to-r, blue.400, green.500)"}
              bgClip={"text"}
              textAlign={"center"}
            >
              Current Manga Collection
            </Text>
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              textAlign={"left"}>📚</Text>
          </HStack>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >

            {Array.isArray(manga) && manga.map((manga) => (
              <MangaCard key={manga._id} manga={manga} />
            ))}
            <Text>{manga[1].name}</Text>

          </SimpleGrid>
        </>
      )}


      <VStack spacing={1} justifyContent={"center"} py={2}>

        {Array.isArray(music) && music.length === 0 && Array.isArray(manga) && manga.length === 0 && (
          <Text
            fontSize={"25"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            No Collection was found 😥
          </Text>
        )}

        {Array.isArray(music) && music.length === 0 && (
          <Link to={"/createMusic"}>

            <Text
              as={"span"}
              fontSize={"15"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create Music Resource 🎶
            </Text>
          </Link>
        )}

        {Array.isArray(manga) && manga.length === 0 && (
          <Link to={"/createManga"}>

            <Text
              as={"span"}
              fontSize={"15"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create Manga Resource 📚
            </Text>
          </Link>
        )}

        <Link to={"/createTradingCards"}>
          <Text
            as={"span"}
            fontSize={"15"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"blue.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Create Trading Card Resource 🎴
          </Text>
        </Link>

        <Link to={"/createVideoGame"}>
          <Text
            as={"span"}
            fontSize={"15"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"blue.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Create Video Game Resource 🎮
          </Text>
        </Link>

      </VStack>

    </Container>
  )
}

export default HomePage