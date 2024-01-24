import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiLogoLinkedinSquare, BiLogoGmail, BiLogoGithub } from 'react-icons/bi';
import ButtonFooter from './ButtonsFooter';

export default function Footer() {
  return (
    <Box
      width="100%"
      position="fixed"
      bottom="0"
      zIndex="10"
      bg={useColorModeValue('#202020', 'gray.900')}
      color={'#fff'}
      p={[2, 4]}
      boxShadow="0px -1px 2px 0px rgba(0,0,0,0.5)"
    >

      <Container as={Stack}
        maxW={'4xl'}
        p={0}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

        <Text>© 2023 Desenvolvido por Natália Ribeiro</Text>

        <HStack spacing={6}>

          <ButtonFooter label={'Github'} href={"https://github.com/nataliaribeiro-dev"}>
            <BiLogoGithub color='#fff' />
          </ButtonFooter>

          <ButtonFooter label={'Linkedin'} href={"https://www.linkedin.com/in/dev-natalia-ribeiro/"}>
            <BiLogoLinkedinSquare color='#fff' />
          </ButtonFooter>

          <ButtonFooter label={'Email'} href={"mailto:natilgr@hotmail.com"}>
            <BiLogoGmail color='#fff' />
          </ButtonFooter>

        </HStack>

      </Container>

    </Box >
  )
}
