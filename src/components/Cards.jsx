import { Card, CardBody, CardHeader, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import cardsData from "../assets/css/icons/react-icons/cards.icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Cards({ spacing, templateColumns }) {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }
  , []);

  return (
    <SimpleGrid spacing={spacing} templateColumns={templateColumns}
    m={20}
    >
      {
      cardsData.map((card, index) => (
        <Card key={index}
        maxW={'220px'}
        h={'210px'}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        border={'2px solid #f2c744'}
        transitionDelay={1000}
        bg={'#202020'}
        borderRadius={'10px'}
        boxShadow={'xl'}
        p={8}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        _hover={{
          transition: "all 0.3s ease",
          backgroundColor: "#000",         
        }}
        
        
        >
          <CardHeader
          mb={0}

          >
            <Heading size='md'
            color={'#fff'}
            mt={16}
            mb={0}
            p={2}
            borderBottom={'2px solid #f2c744'}
            borderTop={'2px solid #f2c744'}
            >{card.heading}
            </Heading>
          </CardHeader>
          <CardBody>
            <Icon
            ml={'14'}
            w={'150px'}
            h={'100%'}
            color={'#f2c744'}
            fontSize={'sm'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            transition="color 0.3s" // Adicione a transição de cor de fundo
            _hover={{
              color: 'white', // Define a cor de fundo no hover
            }}
            >{card.icon}</Icon>
          </CardBody>
          
        </Card>
      ))}
    </SimpleGrid>
  );
}