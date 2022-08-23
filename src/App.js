import * as React from "react";
import {Flex, Grid,SimpleGrid, GridItem, Text, Box, Image, Badge, extendTheme, Center, Button} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'

function App() {

return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, md: 3 }} gap={2} mt={5}>

        <Box pt="5" mt={10} ml={4} marginRight="50px">
            <Text color="blue" fontSize={17} fontWeight="bold">
              Pricing
            </Text>
            <Text color="#2f2f2f" fontWeight="bold" fontSize={35}>
              Get lifetime access
            </Text>
            <Text color="grey" pt={3} fontSize={20}>
              Choose from over 210+ beautiful and responsive components.
            </Text>
        </Box>
  

        <Box p="5" m={4} maxW="360px" borderWidth="1px"  borderRadius="20px" backgroundColor="white" mt={10}  boxShadow='lg'>
          <Center>
              <Text alignSelf="center" fontWeight="bold" fontSize={50} color="#2f2f2f">
                $149
              </Text>
          </Center>
          <Center>
              <Text fontWeight="semibold" fontSize={24} color="#2f2f2f" pt={3}>
                Application
              </Text>
          </Center>
          <Center>
              <Text fontSize={18} color="grey" pt={2}>
               For Accessible Application
              </Text>
          </Center>

            <Box mt={6}>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Application components
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Unlimited projects
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Lifetime access
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Customer support
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Free updates
                </Text>
            </Box>
              <Button colorScheme='blue' width="100%" margin="7px 7px" mt={4} borderRadius={10} p={6}>Get Started</Button>
          </Box>

          <Box p="5" m={4} maxW="360px" borderWidth="1px"  borderRadius="20px" backgroundColor="white" mt={10}  boxShadow='lg'>
          <Center>
              <Text alignSelf="center" fontWeight="bold" fontSize={50} color="#2f2f2f">
                $149
              </Text>
          </Center>
          <Center>
              <Text fontWeight="semibold" fontSize={24} color="#2f2f2f" pt={3}>
                Marketing
              </Text>
          </Center>
          <Center>
              <Text fontSize={18} color="grey" pt={2}>
               For Impressive Landing Pages
              </Text>
          </Center>

            <Box mt={6}>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Marketing components
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Unlimited projects
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Lifetime access
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Customer support
                </Text>
                <Text fontSize={18} color="grey">
                  <CheckIcon w={6} h={6} p="3px" color="blue.300" backgroundColor="#EBF8FF" borderRadius={100} m={3}></CheckIcon>
                  Free updates
                </Text>
            </Box>
                <Button colorScheme='blue' width="100%" margin="7px 7px" mt={4} borderRadius={10} p={6}>Get Started</Button>
          </Box>

      </SimpleGrid>
    </>
  );
}

export default App;
