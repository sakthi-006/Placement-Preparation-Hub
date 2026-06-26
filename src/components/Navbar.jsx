// function Navbar() {
//   return (
//     <nav className="navbar"id="Navbar">

//       <h2>Placement Hub</h2>

//       <ul>
//         <li><a href="#Features">Features</a></li>
//         <li><a href="#Companies">Companies </a></li>
//         <li><a href="#Roadmap">Roadmap</a></li>
//         <li><a href="#Contact">Contact</a></li>
//         <li><a href="#About Us">About Us</a></li>
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>PlacementHub</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tracker">Tracker</Link>
        </li>
        <li>
          <Link to="/MockTest">MockTest</Link>
        </li>
        <li>
          <Link to="/resume"> Resume Builder</Link>
        </li>
        
        <li>
          <Link to="/DashBoard">Dashboard</Link>
        </li>
        <li>
          <Link to="/PlacementCalculator">PlacementCalculator</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;