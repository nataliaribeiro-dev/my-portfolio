import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AboutMeBtn() {
  return (
    <ButtonGroup spacing={4} mt={8} mb={12}>
      <Link href="mailto:natilgr@hotmail.com" isExternal>
        <Button
          as="a"
          leftIcon={<MdOutlineEmail />}
          px={4}
          bg={'black'}
          color={'#fff'}
          border={'2px solid #202020'}

          _hover={{
            bg: '#f2c744',
            color: '#202020',
            transform: 'scale(1.1)',
          }}
          variant="outline"
          aria-label="Email"
          textDecoration="none"
        >
          E-mail
        </Button>
      </Link>

      <Link href="https://wa.me/5551992075245" isExternal>
        <Button
          as="a"
          rightIcon={<MdWhatsapp />}
          bg="#202020"
          border={'2px solid #202020'}
          color={'#fff'}
          variant="outline"
          aria-label="Telefone"
          textDecoration="none"
          _hover={{
            bg: '#f2c744',
            color: '#202020',
            transform: 'scale(1.1)',
          }}
        >
          Chat
        </Button>
      </Link>
    </ButtonGroup>
  )
}