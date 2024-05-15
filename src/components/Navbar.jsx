import "./Navbar.css";
import brand_logo from "../images/brand_logo.png";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={brand_logo} alt="logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    );
}

export default Navbar;