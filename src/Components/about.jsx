import { NavLink, Outlet, Link } from "react-router-dom";

function About () {
return (
  <section className = "About-Page">
  <h1 className= "Heading">About Me</h1>
    <p>Thank you for coming here, it shows you're ready to learn about my likes and my dislikes</p>
    <p>Click on the link below to see some of my likes and my dislikes or return to the Home Page</p>
    <Link to = "/" className="Navigate"> Home </Link>
     <Link to = "/about/likes" className="Navigate"> Likes </Link>
     <Link to = "/about/dislikes" className="Navigate"> Dislikes </Link>
  </section>
)  
}

export default About;