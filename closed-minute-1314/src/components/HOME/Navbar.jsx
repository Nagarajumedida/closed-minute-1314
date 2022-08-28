import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Furniture from "./Fur";
import Hello from "./Main";
import Wedding from "./wed";

export default function Navbar(){
    return(
        <Box>
            <Routes>
                <Route path="/" element={<Hello/>}/>
                <Route path="/furniture" element={<Furniture/>}/>
                <Route path="/wedding" element={<Wedding/>}/>
            </Routes>
        </Box>
    )
}