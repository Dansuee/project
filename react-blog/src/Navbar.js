import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Web Blog</h1>
            <div class="links">
                <Link to="/">Home</Link>              
                <Link to="/create">New Blog</Link>              
            </div>
        </nav>
     );
}
export default Navbar;