import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>Hom</Link>
      <Link to={"/abaut"}>abaut</Link>
      <Link to={"/contact"}>contact</Link>
    </div>
  )
};

export default Header;

// import React from "react";
// import { NavLink as Link } from "react-router-dom";
// import "./Header.css";
// const Header = () => {
//   return (
//     <nav className="Header">
//       <Link to={"/"}>Home</Link>
//       <Link to={"/abaut"}>abaut</Link>
//       <Link to={"/contact"}>contact</Link>
//     </nav>
//   );
// };

// export default Header;
