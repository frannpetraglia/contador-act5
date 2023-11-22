import React from "react";
import { Button, IconButton } from '@chakra-ui/react'
import { TiHome } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'




function Header(){

    const { isOpen, onToggle } = useDisclosure();


    return(
        <>
            <Box

                p={3}
                color='#f2f0eb'
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                textAlign={'center'}
            >
                <Box 
                    as='column'
                    p={2}
                    mr={7}
                    textAlign={'start'}
                    fontSize={50}
                    fontFamily={'Arial Unicode MS'}
                    color='#39e9bf'
                    textShadow='1px 3px #5e1658'
                    _hover={{
                        color:'#f2f0eb',
                        
                        textShadow:'1px 3px #5e1658'
                    }}
                >
                    Door Applications
                </Box>
                
                <IconButton                    
                    onClick={onToggle}                    
                    aria-label='Call Segun'
                    size='lg'
                    bgGradient='linear(to-r, #2cc369, #569586)'
                    _hover={{
                        color:'#f2f0eb',
                        bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                      }}
                    icon={<TiThMenu />}
                    mb='2'
                />
                <Collapse in={isOpen} animateOpacity>
                    <Stack direction='row' spacing={4} align='center'>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        _hover={{
                            color:'#f2f0eb',
                        bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                        }}
                        variant='solid'>
                            Home
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        _hover={{
                            color:'#f2f0eb',
                        bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                        }}
                        variant='solid'>
                            More Apps
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        _hover={{
                            color:'#f2f0eb',
                        bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                        }}
                        variant='solid'>
                            About Us
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        _hover={{
                            color:'#f2f0eb',
                        bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                        }}
                        variant='solid'>
                            Contacts
                        </Button>
                    </Stack>
                </Collapse>
            </Box>
        </>
    )
}

export default Header;