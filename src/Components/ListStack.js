//Importando css errado para fim de teste
import styles from './Form.module.css'


function ListStacks({arrayStacks}){
    return (
        <div className={styles.divContent}>
            <h3>Stacks I Master</h3>
            {arrayStacks.length > 0 ?(
            arrayStacks.map((i, index) => (
                <p>{i}</p>
            ))): (<p> Error 404! Values Not Found </p>)}
        </div>
    )
}

export default ListStacks;
