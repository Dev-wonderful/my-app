import React from 'react'
import header from './Header.module.css'

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    const scrollTo = (arg: string) =>{
        if (arg === 'contact') {
            window.scrollTo({
              top: 2000, 
              behavior: 'smooth'
              
            });
        } else {
            window.scrollTo({
                top: 1200, 
                behavior: 'smooth'
                
            });
        }
        // console.log('Top')
      };

    return ( 
        <header className={header.header}>
            <section className={header.hero}>
                <div className={header.hero_gradient}>
                    <nav className={header.nav}>
                        <ul className={header.ul}>
                            <li>Home</li>
                            <li onClick={() => scrollTo('contact')}>Contact me</li>
                            <li onClick={() => scrollTo('')}>Projects</li>
                        </ul>
                    </nav>
                    <div className={header.content}>
                        <h2>My name is <span className={header.span}>Wonderful</span></h2>
                        <p>A <span className={header.span}>Javascript</span> Developer, into building web applications which profer solutions to its users, using credible web technologies. I keep working towards being a better web Developer</p>
                    </div>
                </div>
            </section>
        </header>
     );
}
 
export default Header;