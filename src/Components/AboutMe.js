import styles from './AboutMe.module.css'
import Image from './Image.js';


function AboutMe({fullName, ocupation, name, age, techStack}){
    return (
        <div className={styles.divContent}>
        <>
            <h2>{fullName}</h2>
            <h2>{ocupation}</h2>
            <Image />
            <p>Hello World, my name is {name}.</p>
            <p>I am {age} years old.</p>
            <p>My main programming stack is {techStack}.</p>
        </>
        </div>
        
    )
}

export default AboutMe;