import { NavLink, Outlet, Link } from "react-router-dom";

function Dislikes() {
return (
  <section className = "Disikes-Container">
  <h1 className= "Heading">Dislikes</h1>
    <p>Me i don't like wahala (trouble)</p>
    <p>Now you know, can we be friends?</p>
     <Link to = "/" className="Navigate"> Home </Link>
     <Link to = "/about" className="Navigate"> About </Link>
  </section>
)  
}
export default Dislikes;