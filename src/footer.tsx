import React from "react";
import footer from './footer.module.css'

interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    return ( 
        <footer className={footer.footer}>
            <p><a href="https://gmail.com"><strong>adeonederful20@gmail.com</strong></a></p>
            <p><strong>2022&copy;</strong></p>
            <p><a href=".header"><strong>Back to Top</strong></a></p>
        </footer>
     );
}
 
export default Footer;