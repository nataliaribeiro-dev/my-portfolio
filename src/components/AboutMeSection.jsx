import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Aos from "aos";
import { useEffect } from "react";
import AboutMeText from "./AboutMeText";
import AboutMeBtn from "./AboutMeBtn";
import '@fontsource/bebas-neue';
import meYellow from '../assets/img/meYellowBg.png';

export default function AboutMeSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Flex
      w="110vw"
      h="auto"
      direction="column"
      justify="center"
      alignItems="center"
      bg="#f2c744"
      gap={8}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        border={'1px solid #202020'}
        gap={{ sm: 0, md: 0, lg: 8 }}
      >
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={['50%', '50%', '50%']}
          h={['50%', '50%', '50%']}
        >
          <Heading
            p={0}
            fontFamily={'Bebas Neue'}
            letterSpacing={'0.1rem'}
            color="#202020"
            className="section-title"
            data-aos="fade-up"
            transitionDelay={1000}
          >
            Olá, pode me chamar
            <br />
            de Nathy!
          </Heading>
        </Box>
        <Image boxSize={['30%', '40%', '30%']}
          src={meYellow}
          alt="Natalia Ribeiro"
        />
      </Box>

      <Box maxW={["18rem", "35rem", "60rem"]}
        m={{ left: 16, right: 16 }}
        border={'1px solid #202020'}

      >

        <AboutMeText />
        <AboutMeBtn />
      </Box>

    </Flex>
  );
}
