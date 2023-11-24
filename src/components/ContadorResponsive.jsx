import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme, withDefaultProps } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { Flex, Spacer } from '@chakra-ui/react';
import { Center, Square, Circle,AbsoluteCenter } from '@chakra-ui/react'

function ContadorResponsive(){



    const { isOpen, onToggle } = useDisclosure();

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return(
        
            <Stack direction='column' bgGradient='linear(to-l, #234d41, #569586)' width="100%" height={['50rem','48rem']} >
            <Stack direction={['column','row']}>  
                <Spacer />
            <Center p={['1','4']} > 
            <Button 
                onClick={onToggle}
                p={4}
                fontWeight='bold'
                borderRadius='md'
                bgGradient='linear(to-r, #2cc369, #569586)'
                _hover={{
                    color:'#f2f0eb',
                  bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                  transition: '300ms'
                  
                }}
            >
                Abrir Contador
            </Button>
            </Center> 
            <Spacer />
            </Stack>  
            <Center p={['1','4']}>     
            <ScaleFade initialScale={0.9} in={isOpen}>
                {/* box contenedor: tiene al contador y a sus dos botones*/}
                <Stack
                    
                    direction='column'
                    p={['30px','40px']}
                    color='white'
                    mt='4'
                    rounded={['xs','md']}
                    shadow={['xs','md']}
                    bgGradient='linear(to-l,#39e9bf,#3bd9b3)'
                    width={['sm','37rem']}
                >
                    {/* box del contador*/}
                    <Box                    
                        textAlign='center'
                        p={['3px','40px']}
                        color='#0a0606'
                        borderWidth={['0','1px']}
                        borderRadius={['xs','lg']} 
                        borderColor='#0a0606'
                        mb='2'                       
                        mt='2'
                        ml={['0','2']}
                        mr={['0','2']}
                        fontFamily={'Arial Unicode MS'}
                        fontSize={[10,20]}
                        rounded={['xs','md']}
                        shadow={['xs','lg']}
                        bgGradient='linear(to-l, #17a683, #1edf8b, #17a683)' 
                        _hover={{
                            color:'#f2f0eb',
                            background: '#b929ac',
                            shadow:'lg',
                            textShadow:'1px 3px #5e1658',                            
                            filter: 'drop-shadow(0 0 1em #ff05ed)',
                            transition: 'filter 200ms'
                        }}
                        width={['xs','lg']}
                    >
                    Contador: {contador}
                    </Box>
                    <ButtonGroup variant='outline' spacing={['2','20']}>
                        <Button 
                            onClick={incrementar}
                            color='#0a0606'
                            size={['xs','lg']}
                            height={['xs','50px']}
                            width={['xs','200px']}
                            border='3px'
                            borderColor='#0a0606'
                            bgGradient='linear(to-r, #7928CA, #FF0080)'
                            mt='3'
                            mr={['2','5']}
                            _hover={{
                                color:'#f2f0eb',
                                bgGradient: 'linear(to-r, #d97a3b, #e6681a, #e6a91a)',
                                transition: '300ms'
                              }}
                            
                        >
                            Aumentar        <TiArrowUpThick />
                        </Button>
                        <Button
                            onClick={decrementar}
                            color='#0a0606'
                            size={['xs','lg']}
                            height={['xs','50px']}
                            width={['xs','200px']}
                            border='3px'
                            borderColor='#0a0606'
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            mt='3'
                            ml={['2','10']}
                            _hover={{
                                color:'#f2f0eb',
                                bgGradient: 'linear(to-l, #d97a3b, #e6681a, #e6a91a)',
                                transition: '300ms'
                              }}
                        >
                            Disminuir         <TiArrowDownThick />
                        </Button>
                    </ButtonGroup>
                </Stack>

            </ScaleFade>
            </Center>
            </Stack>
        
    )
}

export default ContadorResponsive;