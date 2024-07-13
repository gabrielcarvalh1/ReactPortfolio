//Importando css errado para fim de teste
import styles from './Form.module.css'
import { useState } from 'react'


function UseStateRenderization(){

    const [helloWorld, setHelloWorld] = useState(); 
    const [helloWorldValue, setHelloWorldValue] = useState();


    function sayHelloWorld(e){
        e.preventDefault()
        setHelloWorldValue(helloWorld)
        console.log(helloWorld + 'Ok!! I guess')
    }



    return (
        <div className={styles.divContent}>
            <form>
            <p>Hello World</p>
            <label htmlFor='hello'>Say Hello World</label>
            <input className={styles.inputField} type='text' onChange={(e) => setHelloWorld(e.target.value)} />
            <button className={styles.btnForm} onClick={sayHelloWorld}>Send Hello World</button>
            {helloWorldValue && (
                <>
                <p>Hello World for you too :)</p>
                <button onClick={(e) => setHelloWorldValue(e.target.value)} >Hello</button>
                </>
            )}
        </form>
        </div>
    )
}


export default UseStateRenderization;