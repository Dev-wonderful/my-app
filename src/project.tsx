import React from "react";
import project from './project.module.css'
// import image from './assets/LInkedin.jpg'
import shopping from './assets/Shopping.webp'
interface ProjectProps {
    
}
 
const Project: React.FunctionComponent<ProjectProps> = () => {
    
    // interface Preview {
    //     title: string,
    //     description: string,
    //     image: string,
    //     url: string
    // }
    // const preview: Preview[] = [
    //     {
    //         "title": "GDSFoundation",
    //         "description": "To Provide Spiritual and Emotional Support to Widows and Single Mothers through the Preaching of the Gospel.",
    //         "image": "https://gds-foundation.herokuapp.com/.public/logo.png",
    //         "url": "https://gds-foundation.herokuapp.com"
    //       },
    //       {
    //         "title": "Product Page",
    //         "description": "",
    //         "image": "",
    //         "url": "https://wonder-shopping.netlify.app/"
    //       },
    //       {
    //         "title": "Dev-wonderful - Repositories",
    //         "description": "Technically Adventurous but......... Dev-wonderful has 26 repositories available. Follow their code on GitHub.",
    //         "image": "https://avatars.githubusercontent.com/u/69244197?v=4?s=400",
    //         "url": "https://github.com/Dev-wonderful?tab=repositories"
    //       },
    //       {
    //         "title": "Wonderful Adeyemo - Frontend Web Developer - Freelance | LinkedIn",
    //         "description": "View Wonderful Adeyemo’s profile on LinkedIn, the world’s largest professional community. Wonderful has 2 jobs listed on their profile. See the complete profile on LinkedIn and discover Wonderful’s connections and jobs at similar companies.",
    //         "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFIGyGvDnG75A/profile-displayphoto-shrink_200_200/0/1639677794166?e=2147483647\u0026v=beta\u0026t=Rh66imporW5txnB2uUb79Y4Nsak-0i8YLDfk9DZ8ZVM",
    //         "url": "https://www.linkedin.com/in/wonderful-adeyemo-4789121a3"
    //       }
    // ]

    return ( 
        <section className={project.container}>
            <h2 className={project.heading}>Projects</h2>
            <div className={project.section}>
                <div className={project.card}>
                    <div className={project.imagediv}><img src="https://gds-foundation.herokuapp.com/public/logo.png" alt="Hephzibah logo" /></div>
                    <h4>GDSFoundation</h4>
                    <p>A website to reach out to Widows and Sponsors</p>
                    <a href="https://gds-foundation.herokuapp.com">The Foundation website</a>
                </div>
                <div className={project.card}>
                    <div className={project.imagediv}><img src={shopping} alt="Shopping Cart" /></div>
                    <h4>Product Page</h4>
                    <p>It has the ability to track orders through the add and remove from cart functionality, quantity and price calculation</p>
                    <a href="https://wonder-shopping.netlify.app/">The E-commerce Page</a>
                    <a href="https://github.com/Dev-wonderful/first-react-app/tree/master/src/Checkout%20system">Link to Repo</a>
                </div>
                {/* <div className={project.card}>
                    <div className={project.imagediv}><img src="https://avatars.githubusercontent.com/u/69244197?v=4?s=400" alt="Github Profile" /></div>
                    <h4>Dev-wonderful - Repositories</h4>
                    <p>Technically Adventurous but......... Dev-wonderful has 26 repositories available. Follow his code on GitHub.</p>
                    <a href="https://github.com/Dev-wonderful?tab=repositories">My Github Repo</a>
                </div> */}
               
                {/* <div className={project.spacer}></div> */}
            </div>
        </section>
     );
}
 
export default Project;