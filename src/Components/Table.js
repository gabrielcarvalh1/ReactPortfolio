//Importando css errado para fim de teste
import styles from './Form.module.css'


function Table({stacksIused}){
    return (
        <div className={styles.divContent}>
            <table>
                <tr>
                    <th>Stacks</th>
                    <th>Experience</th>
                    <th>MVP</th>
                </tr>
                 <tr>
                 {stacksIused.map((i, index) =>(
                 <th>{i}</th>
                 
                ))}
                 </tr>
            
            </table>
        </div>
    )
}

export default Table;