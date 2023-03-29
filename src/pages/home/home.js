import { Link } from "react-router-dom"
import "./home.css"


function Home(){
    return (
        <div className="row" id="header">
        <div className="col-9 m-2">
            <Link 
            to="/" 
            style={{textDecoration:"none",color:"blueviolet"}}
            >
              Home
              </Link>
        </div>
        <div className="col m-2">
          <Link 
          to="/register"
          style={{textDecoration:"none",color:"blueviolet"}}
          >
            Register
          </Link>
        </div>
        <div className="col m-2">
        <Link 
        to="/login"
        style={{textDecoration:"none",color:"blueviolet"}}
        >
          Login
          </Link>
        </div>
      </div>
    )
}


export default Home