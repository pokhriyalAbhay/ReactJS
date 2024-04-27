function Error()
{
    let fooditem = ["dal","salad","green veggies","papad"]
   // let fooditem = []
    return(
        <>
        { fooditem.length ===0 ? <h3>i am still hungry</h3> : null}
        </>
    )
}
export default Error;