import { Routes,Route,Link,BrowserRouter as Router, Outlet, parsePath } from "react-router-dom"
import Home from "./pages/home/home"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Landing from "./pages/landing/landing"
import Customer from "./pages/customer/customer"
import Owner from "./pages/owner/owner"

function App(){
  return <div>
  <div className="header">
  <Router>
    <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/customer/:id" element={<Customer/>}></Route>
        <Route exact path="/owner/:id" element={<Owner/>}></Route>
      </Routes>
  </Router>
  </div>
  <main>
    <Outlet/>
  </main>
  </div>
}


export default App