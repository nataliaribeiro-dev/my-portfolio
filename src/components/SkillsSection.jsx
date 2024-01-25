import { Box, Flex, Heading } from "@chakra-ui/react";
import Cards from "./Cards";
import '@fontsource/bebas-neue';

export default function SkillsSection() {
  return (
    <Flex
      w="110%"
      direction="column"
      justify="center"
      alignItems="center"
      bg="#000"
    >

      <Box className="section-title"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading
          fontFamily={'Bebas Neue'}
          letterSpacing={'0.3rem'}
          size="xl"
          mt={20}
          color="#f2c744"
          className="section-title"
        >
          Habilidades Técnicas
        </Heading>
      </Box>

      <Box className="gridContent-content"
      >
        <Cards
          spacing={8}
          templateColumns={{ "sm": "repeat(1, 1fr)", "md": "repeat(2, 1fr)", "lg": "repeat(3, 1fr)" }}
        />
      </Box>

    </Flex>
  );
}
