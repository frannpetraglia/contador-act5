import React from "react";
import { IconButton } from '@chakra-ui/react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Box } from '@chakra-ui/react'

function Footer(){
    return(
        <>
            <Box bgGradient='linear(to-l, #234d41, #569586)' w='100%' p={30}>
                <Box as='label' p={5}                            
                    _hover={{
                    color:'#f2f0eb',
                }}
                >Aplicacion Contador
                </Box>
                <Box as='label'p={5}
                    _hover={{
                        color:'#f2f0eb',
                    }}
                >Franco Petraglia</Box>
                <IconButton
                    colorScheme='pink'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<TiSocialInstagram />}
                    
                />
                <IconButton
                    colorScheme='facebook'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<TiSocialFacebookCircular />}
                />
                <IconButton
                    colorScheme='twitter'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<TiSocialTwitter />}
                />        
            </Box> 
        </>
    )
}

export default Footer;