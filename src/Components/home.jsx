import {Routes, Route, Link} from "react-router-dom"
import {useState} from 'react';
function Home() {
    const [count, setCount] = useState(0)

  
function handleCount() {
  setCount(prev => prev + 1)

}
    if(count > 3) {
    throw new Error("Error Boundary. Checked.");
  }

return (
  <section className = "Home-Container">
  <h1 className= "Heading">Home</h1>
    <p>Welcome to the Home Page</p>
    <p>Click the link below to go to the About Page</p>
    <Link to = "/about" className="Navigate"> About Page </Link>
     <h1>Count:  {count}</h1>
    <p>To check error boundary, increase to count to be greater than 3</p>
      <button onClick={handleCount}>INCREASE</button>
  </section>
)  
}
export default Home;