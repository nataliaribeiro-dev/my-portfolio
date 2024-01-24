import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  ButtonGroup,
  Button,
  Link,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import { useState } from 'react';
import projectDetails from '../data/projectsCards.data';
import '@fontsource/bebas-neue';
import Footer from '../components/Footer';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Projects() {
  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '12%' })

  return (
    <>
      <Flex
        direction={'column'}
        height={'100vh'}
        bg={'#202020'}
        overflow={'hidden'}
      >
        <Heading
          fontFamily={'Bebas Neue'}
          letterSpacing={'0.2rem'}
          textAlign={'center'} p={8} color={'#f2c744'}>Projetos</Heading>

        <Box
          height={'65vh'} width={'full'} overflow={'hidden'}>

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {projectDetails.map((card, index) => (
              <Box
                key={index}
                height={'xl'}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >

                <Container size="container.lg" position={'relative'}
                >
                  <Stack
                    mt={12}
                    spacing={4}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"

                  >
                    <Heading
                      fontFamily={'Bebas Neue'}
                      letterSpacing={'0.2rem'}
                      fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="black">
                      {card.text}
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'md' }} color="black">
                      <span>Tecnologias utilizadas:</span> {card.tech}
                    </Text>

                    <ButtonGroup spacing={4}>
                      <Button colorScheme="yellow" size="lg">
                        <Link
                          fontFamily={'Bebas Neue'}
                          letterSpacing={'0.1rem'}
                          href={card.linkDemo} isExternal>Demonstração</Link>
                      </Button>
                      <Button colorScheme="yellow" size="lg">
                        <Link href={card.linkCode}
                          fontFamily={'Bebas Neue'}
                          letterSpacing={'0.1rem'}
                          isExternal>Código</Link>
                      </Button>
                    </ButtonGroup>

                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box >




        <Footer />
      </Flex >

    </>
  );
}