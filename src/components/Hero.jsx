import { TypeAnimation } from 'react-type-animation';
import { BiLogoLinkedinSquare, BiLogoGmail, BiLogoGithub } from 'react-icons/bi';
import ExternalLink from './ExternaLink';
import { Icon, Flex, Stack, Heading } from '@chakra-ui/react';
import ImageHeroContainer from './ImageHeroContainer';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (

    <Flex
      w={'100vw'}
      h={'100vh'}
      bg={'#000'}
      direction={['column', 'column', 'row']}
      justifyContent={'center'}
      alignItems={'center'}
    >

      <Stack width={['60vw', '60vw', '100vw']} spacing={2} mx={'auto'} py={6} px={6} ml={['auto', 'auto', '18%']}
        textAlign={['center', 'center', 'start']}
      >

        <Heading fontSize={['30px', '40px', '64px']}
          fontFamily={'Bebas Neue'}
          fontWeight={'bold'}
          color={'#ffbb2c'}
          lineHeight={['30px', '40px', '64px']}
          mb={['0', '0', '12px']}
          textAlign={['center', 'center', 'start']}
          letterSpacing={'6px'}

        > NATALIA RIBEIRO</Heading>


        <div className="social-links" data-aos="fade-right">
          <ExternalLink
            icon={<Icon as={BiLogoGithub} />}
            href="https://github.com/nataliaribeiro-dev"
            gridColumn={3}
          />
          <ExternalLink
            icon={<Icon as={BiLogoLinkedinSquare} />}
            href="https://www.linkedin.com/in/dev-natalia-ribeiro/"
            gridColumn={4}
          />
          <ExternalLink
            icon={<Icon as={BiLogoGmail} />}
            href="mailto:natilgr@hotmail.com"
            gridColumn={5}
          />


        </div>

        <div className="typ-container" data-aos="fade-right">
          <TypeAnimation
            style={{
              whiteSpace: 'pre-line',
              fontSize: isMobile ? '1vw' : '2vw',
              color: 'white',
              fontFamily: 'Roboto mono',
              fontWeight: '400'
            }}


            sequence={[
              'Front-end', 800,
              'Back-end', 800,
              `Desenvolvimento Web \n Humanizado.`, 500
            ]}

            repeat={Infinity}
          />
        </div>
      </Stack>
      <ImageHeroContainer />


    </Flex >

  );
}