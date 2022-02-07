import React from 'react'
import { Link } from "react-router-dom";
import nclogo3 from "./nclogo3.png"

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "black" }}>
        <div class="container-fluid">
          <Link class="navbar-brand" to="/general" >
            <img src={nclogo3} alt="" width="40" height="24" className="d-inline-block align-text-top" style={{ paddingRight: "10px" }} />
            News Caster
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" ><Link className="nav-link" to="/general">General</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
            </ul>

          </div>
        </div>
      </nav>
    )
}

export default Navbar
