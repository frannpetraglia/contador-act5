import React from "react";
import { IconButton } from '@chakra-ui/react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
function Footer(){
    return(
        
            <Flex minWidth='max-content' alignItems='center' gap={['0','2']} bgGradient='linear(to-l, #234d41, #569586)' p={['2','30']}>
                <Box as='label' p={['0','5']}                            
                    _hover={{
                    color:'#f2f0eb',
                    transition: '300ms'
                }}
                >Aplicacion Contador
                </Box>
                <Spacer />
                <Box as='label'p={['0','5']}  
                    _hover={{
                        color:'#f2f0eb',
                        transition: '300ms'
                    }}
                >Franco Petraglia</Box>
                <Spacer />
                <IconButton
                    colorScheme='pink'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialInstagram />}
                    
                />
                <IconButton
                    colorScheme='facebook'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialFacebookCircular />}
                />
                <IconButton
                    colorScheme='twitter'
                    aria-label='Call Segun'
                    size={['xs','lg']}
                    icon={<TiSocialTwitter />}
                />        
            </Flex> 
        
    )
}

export default Footer;