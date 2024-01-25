import '@fontsource/bebas-neue';
import { Box, Flex, Heading } from "@chakra-ui/react";
import CardsCarousel from "../components/CardsCarousel";
import JobsCards from "../components/JobsCards";
import BottonSection from '../components/BottonSection';
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow={'hidden'}
    >
      <section>
        <Flex flexDirection="column">
          <Box>

            <Flex flexDirection="column"
              bg={'black'}
            >
              <Box
                h={'20vh'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Heading
                  fontFamily={'Bebas Neue'}
                  letterSpacing={'0.2rem'}
                  as='h3' size={'lg'} color={'#f2c744'}>Formação e Aprendizados</Heading>
              </Box>

              <CardsCarousel />

            </Flex>

            <Flex flexDirection="column">

              <Box
                h={'20vh'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'#000'}
              >
                <Heading
                  fontFamily={'Bebas Neue'}
                  letterSpacing={'0.2rem'}
                  as='h3' size={'lg'} color={'#f2c744'}
                >Experiências Profissionais</Heading>

              </Box>

              <Flex
                flexDirection={'column'}
                gap={10}
                alignItems={'center'}
                bg={'#fff'}
                p={50}
              >
                <JobsCards />

              </Flex>

            </Flex>

          </Box>
        </Flex>
      </section >

      <BottonSection />

      <Footer />

    </Flex >
  );
}