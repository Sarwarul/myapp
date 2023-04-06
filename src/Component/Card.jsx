import React from "react";
const Card=({ProjectName,
    ProjectDescription})=> {
    return (
     <div className="card">
        <h2>{ProjectName}</h2>
        <h2>{ProjectDescription}</h2>
     </div>
    );
}
export default Card;