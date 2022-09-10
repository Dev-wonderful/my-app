import React from 'react'
import header from './Header.module.css'

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <header className={header.header}>
            <section className={header.hero}>
                <div className={header.hero_gradient}>
                    <nav className={header.nav}>
                        <ul className={header.ul}>
                            <li>Home</li>
                            <li>Contact me</li>
                            <li>Projects</li>
                        </ul>
                    </nav>
                    <div className={header.content}>
                        <h1>My name is <span className={header.span}>Wonderful</span></h1>
                        <p>I'm a <span className={header.span}>Javascript</span> Developer</p>
                    </div>
                </div>
            </section>
        </header>
     );
}
 
export default Header;