import styles from "./Card.module.css"
function Card()
{
    let fooditem = ["dal","salad","green veggies","papad"]
    function printitem(item)
    {
      console.log(`${item} being selected`)
    }
  // let fooditem = []
    return(
        <>
         <ul className="list-group">
           {fooditem.map(item=> <li key ={item} className="list-group-item"> {item} 
           <button 
           className={styles.button}
           onClick={()=>printitem(item)}
           
           
           >Buy</button>
           </li>)}
           
          
       </ul>
        
        </>
    )
}
export default Card;