import { Button, VisuallyHidden } from "@chakra-ui/react"

export default function ButtonFooter({ children, label, href }) {
  return (
    <Button
      as={'a'}
      href={href}
      target={'_blank'}
      size={'xl'}
      bg='blackAlpha.600'
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button >
  )
}