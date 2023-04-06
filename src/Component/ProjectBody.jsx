import ProjectDetails from "./ProjectDetails";
import Card from "./Card";

function ProjectBody(){
return(
  <div className="details">
    {ProjectDetails.map((project)=>
        <Card project={project} key={project.id}/>
    )}
  </div>
);
}
export default ProjectBody;