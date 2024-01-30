import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  Avatar,
  Icon,
  Image,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import ExternalLink from '../components/ExternaLink';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare } from 'react-icons/bi';
import '@fontsource/bebas-neue';
import qrCode from '../assets/img/qrCode.jpeg';
import meYellow from '../assets/img/meYellowBg.png';

export default function Contact() {
  return (
    <Flex
      bg="#f2c744"
      h={'100%'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        boxSizing='border-box'
        w={'550px'}
        border={'2px solid red'}
        justifyContent="center">
        <Box
          w={{ sm: '60vw', md: '65vw', lg: '50vw' }}
          bg="#fff"
          color="#202020"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 16 }}
          p={{ sm: 5, md: 5, lg: 18 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border={'2px solid #202020'}
        >
          <Flex >
            <Avatar
              m={{ sm: 3, md: 3, lg: -16 }}
              size="2xl"
              src={meYellow}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Wrap>
            <WrapItem
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <VStack>
                <Heading
                  mt={{ sm: 3, md: 3, lg: 100 }}
                  fontFamily={'Bebas Neue'}
                  letterSpacing={'0.2rem'}
                  fontSize="2xl"
                  color="#202020"
                  textAlign="center"
                >
                  Natália Ribeiro
                </Heading>
                <Text color="gray.800" textAlign="center">
                  Desenvolvedora Web
                </Text>
              </VStack>
              <Box
                p={{ base: 5, sm: 5, md: 8, lg: 10 }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                alignItems="center"
                gap={6}
              >
                <Image
                  boxSize={{ base: '35%', md: '60%', lg: '60%' }}
                  objectFit="cover"
                  src={qrCode}
                  alt="QR Code"
                />
                <VStack
                  border={'2px solid #202020'}
                  pl={0} spacing={3} alignItems="center">
                  <Button
                    size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#202020"
                    cursor={"default"}
                    leftIcon={<MdLocationOn color="purple" size="20px" />}
                  >
                    Florianópolis, SC
                  </Button>
                </VStack>
              </Box>
              <Wrap spacing={5} px={5} justify="center">
                <ExternalLink
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="50px"
                  h="50px"
                  icon={<Icon as={BiLogoGithub} color="#202020" />}
                  href="https://github.com/nataliaribeiro-dev"
                  gridColumn={3}
                  variant="ghost"
                  size="lg"
                  borderRadius="full"
                  _hover={{ bg: '#f2c744' }}
                />
                <ExternalLink
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  icon={<Icon as={BiLogoLinkedinSquare} color="#202020" />}
                  href="https://www.linkedin.com/in/dev-natalia-ribeiro/"
                  gridColumn={4}
                  variant="ghost"
                  size="lg"
                  _hover={{ bg: '#f2c744' }}
                />
                <ExternalLink
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  icon={<Icon as={BiLogoGmail} color="#202020" />}
                  href="mailto:natilgr@hotmail.com"
                  gridColumn={5}
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#f2c744' }}
                />
              </Wrap>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </Flex >
  );
}