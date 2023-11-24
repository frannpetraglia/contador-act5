import React from "react";
import { Button, IconButton } from '@chakra-ui/react'
import { TiHome } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'




function Header(){

    const { isOpen, onToggle } = useDisclosure();


    return(
        
                <Flex
                minWidth='max-content'
                alignItems='center'
                justifyContent={['space-between', 'flex-start']}
                flexWrap={['wrap', 'nowrap']}
                p={3}
                color='#f2f0eb'
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                >
                <Box 
                    
                    p={2}
                    mr={7}
                    textAlign={['center', 'start']} /* En pantallas pequeñas centrar el texto, en pantallas más grandes alinear a la izquierda */
                    fontSize={[30, 50]} /* Tamaño del texto ajustado para pantallas pequeñas */
                    fontFamily={'Arial Unicode MS'}
                    color='#39e9bf'
                    textShadow='1px 3px #5e1658'
                    _hover={{
                        color:'#f2f0eb',
                        transition: '300ms',
                        textShadow:'1px 3px #5e1658'
                    }}
                >
                    Door Applications
                </Box>
                <Spacer />

                <Collapse in={isOpen} animateOpacity size={['xs', 'lg']} direction={['column', 'row']}>
                    <Stack direction={['column', 'row']} spacing={4} alignItems='start'>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        size={['xs', 'md']}
                        _hover={{
                            color:'#f2f0eb',
                            bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                            transition: '300ms'
                        }}
                        variant='solid'>
                            Home
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        size={['xs', 'md']}
                        _hover={{
                            color:'#f2f0eb',
                            bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                            transition: '300ms'
                        }}
                        variant='solid'>
                            More Apps
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        size={['xs', 'md']}
                        _hover={{
                            color:'#f2f0eb',
                            bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                            transition: '300ms'
                        }}
                        variant='solid'>
                            About Us
                        </Button>
                        <Button
                        bgGradient='linear(to-r, #2cc369, #569586)'
                        size={['xs', 'md']}
                        _hover={{
                            color:'#f2f0eb',
                            bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                            transition: '300ms'
                        }}
                        variant='solid'>
                            Contacts
                        </Button>
                    </Stack>
                </Collapse>
                <IconButton
                    onClick={onToggle}
                    aria-label='Call Segun'
                    size={['xs', 'lg']}
                    bgGradient='linear(to-r, #2cc369, #569586)'
                    _hover={{
                    color: '#f2f0eb',
                    bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                    transition: '300ms',
                    }}
                    icon={<TiThMenu />}
                    mb={['2', '0']}
                    mr={['0', '2']}
                    ml={['0','2']}
                />

            </Flex>
        
    )
}

export default Header;