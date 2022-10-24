import { NavLink, Outlet, Link } from "react-router-dom";

function Likes () {
return (
  <section className = "Likes-Container">
  <h1 className= "Heading">Likes</h1>
    <p>First things first, I love to play. E shock you?</p>
     <Link to = "/" className="Navigate"> Home </Link>
     <Link to = "/about" className="Navigate"> About </Link>
  </section>
)  
}

export default Likes;