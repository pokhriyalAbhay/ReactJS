import styles from "./Placeholder.module.css"

function Placeholder()
{
    return <input type="text" placeholder="enter the item here"
    className={styles.input}
    onChange={(event)=>console.log(event)}
    
    />

}
export default Placeholder;