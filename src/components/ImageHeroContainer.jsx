import { Box, Image } from '@chakra-ui/react'
import heroImg from '../assets/img/me.png'

function ImageHeroContainer() {
  return (
    <div>
      <Box
        w={'48vw'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image src={heroImg} alt='Natalia Ribeiro'
          objectFit={'cover'}
        />
      </Box>
    </div>
  )
}

export default ImageHeroContainer