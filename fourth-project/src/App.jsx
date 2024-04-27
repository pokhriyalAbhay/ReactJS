
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../components/Card'
import Error from '../components/Error'
import Container from '../components/Container'
import Placeholder from '../components/Placeholder'
function App() {
 //let fooditem = ["dal","salad","green veggies","papad"]
let fooditem = []
 //if(fooditem.length === 0)
 //{
  //return <h3>i am still hungry</h3>;
 //}
// let num =  fooditem.length ===0 ? <h3>i am still hungry</h3> : null // conditional checking using ternary operator

  return (
  
   <Container>
    <h1>Healthy food</h1>
    <Error></Error>
    <Placeholder></Placeholder>
    <Card></Card>
   </Container>
  
  )
}

export default App
