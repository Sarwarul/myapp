import ProjectDetails from "./ProjectDetails";
import Card from "./Card";

function ProjectBody(){
return(
  <div className="details">
    {/* {ProjectDetails.map((project)=>{
        return <Card{...project.ProjectName} key={project.id}/>;
    })} */}
    <ProjectDetails/>
  </div>
);
}
export default ProjectBody;