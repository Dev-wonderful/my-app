import React from "react";
import project from './project.module.css'
import { getLinkPreview } from 'link-preview-js'

interface ProjectProps {
    
}
 
const Project: React.FunctionComponent<ProjectProps> = () => {
    // getLinkPreview("https://gds-foundation.herokuapp.com").then(data => console.log(data))
    return ( 
        <section className={project.container}>
            <h2 className={project.heading}>Projects</h2>
            <div className={project.section}>
                <div className={project.card}><a href="https://gds-foundation.herokuapp.com">A Foundation website</a></div>
                <div className={project.card}><a href="https://wonder-shopping.netlify.app/">An E-commerce Page</a></div>
                <div className={project.card}><a href="https://github.com/Dev-wonderful?tab=repositories">My Github Repo</a></div>
                <div className={project.card}><a href="https://linkedin.com/in/wonderful-adeyemo-4789121a3">My LinkedIn Profile</a></div>
            </div>
        </section>
     );
}
 
export default Project;