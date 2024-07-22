import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="page-container">
        <figure className="stimulai-img">
          <img src="Stimulai.png" alt="Stimulai" />
        </figure>
        {/* <div className="list-elements">
          <ul className="unordered">
            <li>Team</li>
            <li>My Projects</li>
            <li>Login</li>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;

// import React from "react";
// import "./Navbar.css";
// import userImage from "../../assets/images/user.png";
// import stimulaiImage from "../../assets/images/Stimulai.png";
// function Navbar() {
//   return (
//     <div className="nav-container">
//       <div className="nav-container-left">
//         <img src={stimulaiImage} alt="stimulai" />
//       </div>
//       <div className="nav-container-right">
//         <ul>
//           <li>Team</li>
//           <li>My Projects</li>
//           <li>Login</li>
//         </ul>
//         <figure className="nav-container-right-image">
//           <img src={userImage} alt="user" />
//           <figcaption>Username</figcaption>
//         </figure>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
