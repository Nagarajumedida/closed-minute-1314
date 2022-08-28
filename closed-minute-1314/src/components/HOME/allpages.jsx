import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Allpages(){
    return(
        <Box>
            <Box p={'5'} boxShadow={'2px 0px 0px 0px black'} fontSize={'20px'} fontWeight={'bold'} fontFamily={'sans-serif'}>
                <HStack spacing={'42%'}>
                    <Text><Link to={'/'}>HOME</Link></Text>
                    <Text><Link to={'/furniture'}>FURNITURE</Link></Text>
                    <Text><Link to={'/wedding'}>WEDDING</Link></Text>
                </HStack>
            </Box>
        </Box>
    )
}