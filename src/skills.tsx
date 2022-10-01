import React from 'react'
import skill from './skills.module.css'


interface SkillsProps {
    
}
 
const Skills: React.FunctionComponent<SkillsProps> = () => {
    return ( 
        <section className={skill.container}>
            <div className={skill.card}>
                <h3 className={skill.heading}>Languages</h3>
                
                <ul className={skill.list}>
                    <li className={skill.balance}><img src={require('./assets/logo/css-3.svg').default} alt="" /><span>HTML</span></li>

                    <li className={skill.balance}><img src={require('./assets/logo/css-3.svg').default} alt="" /><span className={skill.text}>CSS</span></li>

                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/javascript.svg').default} alt="" />Javascript</li>

                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/typescript.svg').default} alt="" />Typescript</li>

                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/python.svg').default} alt="" />Python</li>
                </ul>
            </div>
            <div className={skill.card}>
                <h3 className={skill.heading}>Library/Frameworks</h3>
                <ul className={skill.list}>
                    <li className={skill.balance}><img src={require('./assets/logo/bootstrap-5.svg').default} alt="" />Bootstrap</li>
                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/react.svg').default} alt="" />React</li>
                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/vuejs.svg').default} alt="" />Vue</li>
                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/next-js.svg').default} alt="" />Next</li>
                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/express.svg').default} alt="" />Express</li>
                    <li className={skill.balance}><img className={skill.logo} src={require('./assets/logo/django.svg').default} alt="" />Django</li>
                </ul>
            </div>
            <div className={skill.card}>
                <h3 className={skill.heading}>What I Do</h3>
                <ul className={skill.list}>
                    <li>Developing User Interfaces</li>
                    <li>Developing Responsive Web-Apps</li>
                    <li>Promoting Easy Interaction with webpages</li>
                    <li>Creating Rest APIs</li>
                </ul>
            </div>
        </section>
     );
}
 
export default Skills;