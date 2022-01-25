import React from "react";
import { Stack, HStack, VStack,Container,Grid,GridItem,Flex,Spacer ,StackDivider} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { SimpleGrid,Box } from '@chakra-ui/react'
  import { Heading,Text} from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon,ChatIcon,ExternalLinkIcon ,StarIcon} from '@chakra-ui/icons'

function FormUi(){
return(
    <>

       <VStack w="container.sm" h="full" spacing={5} alignItems="flex-end"   >
            <Container maxW="container.md" mt={5} maxHeight="940px">

            <Grid
            h='70px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}

            >
            <GridItem rowSpan={2} colSpan={1}  pt={1} pl={5} ><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></GridItem>
            <GridItem colSpan={4} ><Heading size={15}>Sathish Buwanesh</Heading><Text>2 hours ago</Text></GridItem>

            </Grid>
            <Box pb={6}>
            <Text>Last Saturday we went with <text>Mathilda Brinker</text> to the “Rock Garden Festival” and had a blast! Here’s a small video of one of us in the crowd.</Text>
            </Box>
            <hr/>
            <Box mt={5} mb={5} py={6} borderRadius={10}>
            <Flex

            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box

            as='button'
            _hover={{
              color: 'orange.200',
            }}
            >
            <StarIcon
            boxSize={6}
            />
            </Box>
            <Box  px={3}>
            <Text boxSize={5}>13</Text>
            </Box>
            <Spacer/>
            <Box

            px={5}
            >
            <ChatIcon  boxSize={6}/>
            </Box>
            <Box >
            <Text  boxSize={6}>13</Text>
            </Box>

            <Box  px={3}>
            <ExternalLinkIcon  boxSize={6}/>
            </Box>
            <Box >
            <Text >13</Text>
            </Box>
            </Flex>
            </Box>
            <hr/>
                <Box w="100%" maxHeight="90px" overflow="scroll">
                <Grid
            h='70px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}

            >
            <GridItem rowSpan={2} colSpan={1}  pt={1} pl={5} ><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></GridItem>
            <GridItem colSpan={4} ><Heading size={15}>Sathish Buwanesh</Heading><Text>2 hours ago</Text></GridItem>

            </Grid>
            <Box pb={6}>
            <Text>Last Saturday we went with <text>Mathilda Brinker</text> to the “Rock Garden Festival” and had a blast! Here’s a small video of one of us in the crowd.</Text>
            </Box>
            <hr/>
            <Box  mt={5} mb={5} py={6} borderRadius={10}>
            <Flex

            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box


            >
            <StarIcon
            boxSize={7}
            />
            </Box>
            <Box px={3}>
            <Text boxSize={7}>13</Text>
            </Box>
            <Spacer/>
            <Box

            px={5}
            >
            <ChatIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text  boxSize={7}>13</Text>
            </Box>

            <Box  px={3}>
            <ExternalLinkIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text >13</Text>
            </Box>
            </Flex>
            </Box>
            <hr/>
            <Grid
            h='70px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}


            >
            <GridItem rowSpan={2} colSpan={1}  pt={1} pl={5} ><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></GridItem>
            <GridItem colSpan={4} ><Heading size={15}>Sathish Buwanesh</Heading><Text>2 hours ago</Text></GridItem>

            </Grid>
            <Box pb={6}>
            <Text>Last Saturday we went with <text>Mathilda Brinker</text> to the “Rock Garden Festival” and had a blast! Here’s a small video of one of us in the crowd.</Text>
            </Box>
            <hr/>
            <Box  mt={5} mb={5} py={6} borderRadius={10}>
            <Flex

            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box


            >
            <StarIcon
            boxSize={7}
            />
            </Box>
            <Box  px={3}>
            <Text boxSize={7}>13</Text>
            </Box>
            <Spacer/>
            <Box

            px={5}
            >
            <ChatIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text  boxSize={7}>13</Text>
            </Box>

            <Box px={3}>
            <ExternalLinkIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text >13</Text>
            </Box>
            </Flex>
            </Box>
            <hr/>
            <Grid
            h='70px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}

            >
            <GridItem rowSpan={2} colSpan={1}  pt={1} pl={5} ><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></GridItem>
            <GridItem colSpan={4} ><Heading size={15}>Sathish Buwanesh</Heading><Text>2 hours ago</Text></GridItem>

            </Grid>
            <Box pb={6}>
            <Text>Last Saturday we went with <text>Mathilda Brinker</text> to the “Rock Garden Festival” and had a blast! Here’s a small video of one of us in the crowd.</Text>
            </Box>
            <hr/>
            <Box  mt={5} mb={5} py={6} borderRadius={10}>
            <Flex

            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box


            >
            <StarIcon
            boxSize={7}
            />
            </Box>
            <Box  px={3}>
            <Text boxSize={7}>13</Text>
            </Box>
            <Spacer/>
            <Box

            px={5}
            >
            <ChatIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text  boxSize={7}>13</Text>
            </Box>

            <Box  px={3}>
            <ExternalLinkIcon  boxSize={7}/>
            </Box>
            <Box >
            <Text >13</Text>
            </Box>
            </Flex>
            </Box>
            <hr/>

                </Box>



            </Container>
            </VStack>

    </>
)
}
export default FormUi