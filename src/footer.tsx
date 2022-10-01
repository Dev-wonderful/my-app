import React from "react";
import footer from './footer.module.css'


interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          
        });
      };


    return ( 
        <footer className={footer.footer}>
            <p><a href="https://gmail.com"><strong>adeonederful20@gmail.com</strong></a></p>
            <p><a href="https://www.linkedin.com/in/wonderful-adeyemo-4789121a3"><strong>My LinkedIn Profile</strong></a></p>
            <p onClick={scrollToTop}><strong>Back to Top</strong></p>
            <p><strong>2022&copy;</strong></p>
        </footer>
     );
}
 
export default Footer;