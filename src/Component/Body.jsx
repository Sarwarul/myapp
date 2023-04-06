import React from "react";
import Bio from "./Bio";
import ProjectBody from "./ProjectBody";

import Intro from "./Intro";
import Search from "./Search";
function Body() {
  return(
    <div>
        <Intro/>
        <Bio/>
        
        <Search/>
    </div>
  );
}
export default Body;