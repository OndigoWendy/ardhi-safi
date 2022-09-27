import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

function App() {
  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgColor='white.200'
      bgImage='data:image/png;base64,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'
      bgPos='bottom'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'></Box>

      <Box
        p={4}
        borderRadius='lg'
        mt={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='modal'
      >
        <HStack spacing={4}>
          <Input type='text' placeholder='Origin' />
          <Input type='text' placeholder='Destination' />
          <ButtonGroup>
            <Button colorScheme='pink' type='submit'>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => alert(123)}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default App