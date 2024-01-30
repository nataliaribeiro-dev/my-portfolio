import { Button, Flex, Heading } from "@chakra-ui/react"
import '@fontsource/bebas-neue';

export default function BottonSection() {
  return (
    <Flex
      w="105vw"
      h={'250px'}
      direction="column"
      justify="center"
      alignItems="center"
      bg="#F2C744"
      overflow={'hidden'}
      gap={2}
    >
      <Heading fontSize={'3xl'}
        fontFamily={'Bebas Neue'}
        letterSpacing={'0.2rem'}
        textAlign={'center'}
      >
        Quer saber mais?
      </Heading>
      <Button
        as="a"
        href="https://drive.google.com/file/d/1EHj5wfNmkvUx05NlV4vzJ_CRJYE-93ti/view?usp=sharing"
        target="_blank"
        size="lg"
        fontFamily={'Bebas Neue'}
        letterSpacing={'0.1rem'}
        colorScheme="blackAlpha"
        bg={'#202020'}
        _hover={{
          transition: "all 0.3s ease",
          backgroundColor: "#000",
        }}
        mb={{ sm: 24, md: 14, lg: 16 }}
        p={6}
      >
        Download CV
      </Button>
    </Flex >
  )
}