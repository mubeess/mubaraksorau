import { ArrowUpward, GitHub } from "@mui/icons-material";
import React from "react";

function MyProjects({title,img,github,live,des}) {
  return (
    <div className="my_project">
      <img 
      src={img} />
      <div className="project_desc">
          <span className="title">
           {title}
          </span>
          <span className="main_desc">
             {des}
          </span>
      </div>
      <div className="divide"></div>
      <div className="project_link">
      <span className="prl">Project Links</span>
      <a href={live}>
      <ArrowUpward/>
      </a>
      <a href={github}>
      <GitHub />
      </a>
      
      </div>
   
    </div>
  );
}

export default MyProjects;
