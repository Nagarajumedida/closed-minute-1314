import { Box } from "@chakra-ui/react"
import "./Main.css"
export default function Hello(){
    return(
        <Box className="">
        {/* 1st header */}
            <div className="header">
                  <p>Our Studeis Show:You NEED these.</p>
                  <p>Trending for Fall:Prep's Cool</p>
                  <a href="https://www.anthropologie.com/new-clothes">shop the edit</a>
            </div>
            {/* 2nd header */}
            <div className="nav1">
                <div className="nav2">
                <select name="" id="">
                    <option value="Currency">Currency</option>
                    <option value="USD">USD($)</option>
                    <option value="Language">Language</option>
                    <option value="English">English</option>
                </select>
                </div>
                    <div className="nav3">
                    <a href="" >Sign In</a>
                    <p id="">/</p>    
                    <a href=""> Sign Up</a>
                    </div> 
            </div>
                               {/*  3rd header*/}
            <div className="nav4">
            <div className="nav5">
                <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" alt="" />
            </div>
            <div>
            <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt="" />
            </div>
            <div>
                <input type="text" name="" className="search1" placeholder="search Anthrapologie" />
            </div>
            </div>
           
        </Box>
        
    )
}