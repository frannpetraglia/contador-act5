import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme, withDefaultProps } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";

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
        <>
            <Box bgGradient='linear(to-l, #234d41, #569586)' w='100%' p={30}>
            <Button 
                onClick={onToggle}
                p={4}
                fontWeight='bold'
                borderRadius='md'
                bgGradient='linear(to-r, #2cc369, #569586)'
                _hover={{
                    color:'#f2f0eb',
                  bgGradient: 'linear(to-r, #af34ae, #e424c9)',
                }}
            >
                Abrir Contador
            </Button>

            <ScaleFade initialScale={0.9} in={isOpen}>
                {/* box contenedor: tiene al contador y a sus dos botones*/}
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    rounded='md'
                    shadow='md'
                    bgGradient='linear(to-l,#39e9bf,#3bd9b3)'
                >
                    {/* box del contador*/}
                    <Box
                        p='40px'
                        color='#0a0606'
                        borderWidth='1px'
                        borderRadius='lg' 
                        borderColor='#0a0606'
                        mb='2'                       
                        mt='2'
                        ml='2'
                        mr='2'
                        fontFamily={'Arial Unicode MS'}
                        fontSize={20}
                        rounded='md'
                        shadow='lg'
                        bgGradient='linear(to-l, #17a683, #1edf8b, #17a683)' 
                        _hover={{
                            color:'#f2f0eb',
                            background: '#b929ac',
                            shadow:'lg',
                            textShadow:'1px 3px #5e1658'
                        }}
                    >
                    Contador: {contador}
                    </Box>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button 
                            onClick={incrementar}
                            color='#0a0606'
                            size='lg'
                            height='50px'
                            width='200px'
                            border='3px'
                            borderColor='#0a0606'
                            bgGradient='linear(to-r, #7928CA, #FF0080)'
                            mt='3'
                            mr='2'
                            _hover={{
                                color:'#f2f0eb',
                                bgGradient: 'linear(to-r, #d97a3b, #e6681a, #e6a91a)',
                              }}
                        >
                            Aumentar        <TiArrowUpThick />
                        </Button>
                        <Button
                            onClick={decrementar}
                            color='#0a0606'
                            size='lg'
                            height='50px'
                            width='200px'
                            border='3px'
                            borderColor='#0a0606'
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            mt='3'
                            ml='2'
                            _hover={{
                                color:'#f2f0eb',
                                bgGradient: 'linear(to-l, #d97a3b, #e6681a, #e6a91a)',
                              }}
                        >
                            Disminuir         <TiArrowDownThick />
                        </Button>
                    </ButtonGroup>
                </Box>

            </ScaleFade>
        
            </Box>
        </>
    )
}

export default ContadorResponsive;