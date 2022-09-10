import React from 'react'
import skill from './skills.module.css'


interface SkillsProps {
    
}
 
const Skills: React.FunctionComponent<SkillsProps> = () => {
    return ( 
        <section className={skill.container}>
            <div className={skill.card}>
                <h3 className={skill.heading}>Languages</h3>
                <p className={skill.balance}><img src={require('./assets/logo/css-3.svg').default} alt="css" /><span>HTML</span></p>
                <p className={skill.balance}><img src={require('./assets/logo/css-3.svg').default} alt="css" /><span className={skill.text}>CSS</span></p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/javascript.svg').default} alt="css" />Javascript</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/typescript.svg').default} alt="css" />Typescript</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/python.svg').default} alt="css" />Python</p>
            </div>
            <div className={skill.card}>
                <h3 className={skill.heading}>Library/Frameworks</h3>
                <p className={skill.balance}><img src={require('./assets/logo/bootstrap-5.svg').default} alt="css" />Bootstrap</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/react.svg').default} alt="css" />React</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/vuejs.svg').default} alt="css" />Vue</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/next-js.svg').default} alt="css" />Next</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/express.svg').default} alt="css" />Express</p>
                <p className={skill.balance}><img className={skill.logo} src={require('./assets/logo/django.svg').default} alt="css" />Django</p>
            </div>
            <div className={skill.card}>
                <h3 className={skill.heading}>What I Do</h3>
                <p>Developing User Interfaces</p>
                <p>Developing Responsive Web-Apps</p>
                <p>Promoting Easy Interaction with webpages</p>
                <p>Creating Rest APIs</p>
            </div>
        </section>
     );
}
 
export default Skills;