import styles from './AboutMe.module.css'
import Image from './Image.js';

function AboutMe({fullName, ocupation, name, age, techStack}){
    return (
        <div className={styles.divContent}>
            <h2>{fullName}</h2>
            <h2>{ocupation}</h2>
            <Image/>
            <p className={styles.textContent}>Hello World, my name is {name}.</p>
            <p className={styles.textContent}>I am {age} years old.</p>
            <p className={styles.textContent}>My main programming stack is {techStack}.</p>
        </div>
    )
}

export default AboutMe;