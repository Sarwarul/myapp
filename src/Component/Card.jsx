import React from "react";
const Card=({project})=> {
    return (
     <div className="card">
        <h2>{project.ProjectName}</h2>
        <h2>{project.ProjectDescription}</h2>
     </div>
    );
}
export default Card;