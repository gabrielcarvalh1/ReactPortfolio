import styles from './Form.module.css'
import {useState} from 'react'

function Form(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function meuEvento(e){
        e.preventDefault()
        setUserEmail(email)
        console.log('Got it! E-mail reference ' + email)
    }



    
    return (
        <div className={styles.divContent}>
            <h3>Send me your email, and I will get in touch with you to bring your project to life.</h3>
            <form onSubmit={meuEvento}>
                
                <input className={styles.inputField} type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
                <button className={styles.btnForm} type="submit">Send</button>
            </form>
           {userEmail && (
                <div>
                    <p>Got it! E-mail reference {userEmail}</p>
                    <button className={styles.btnForm} onClick={(e) => setUserEmail(e.target.value)}>Clear Fields</button>
                </div>
            )}
        </div>
    )
}

export default Form;