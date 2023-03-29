import {useState } from "react"
import "./register.css"
import { Link } from "react-router-dom"
import Home from "../home/home"

function Register(){
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [confirmPass,setConfirmPass]= useState("")
  let [type,setType] = useState("Customer")
  function showAll(){
    console.log(email,password,type)
    if(email === "" || password === "" || type === "" ){
      return alert("please fill all the fields")
    }
    if (password !== confirmPass){
      setEmail("")
      setPassword("")
      setType("")
      setConfirmPass("")
      return alert("confirm password doesn't match.")
    }
    async function get(){
      var res = await fetch("http://localhost:3000/register/",{
        method:"POST",
        body:JSON.stringify({email,password,type})
      })
      var dt = await res.json()
      alert(dt.msg)
      setEmail("")
      setPassword("")
      setType("")
    }get()
  }
  return (
    <div>
      <Home/>
    <div className="container m-10" id="form">
      <form>
        <div className="form-group">
          <label for="email" className="form-label">Email</label>
          <input
          className="form-control"
          name="email"
          value={email}
          id="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div><br/>
        <div className="form-group">
        <label for="password" className="form-label">password</label>
          <input
          className="form-control"
          name="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div><br/>
        <div className="form-group">
        <label for="confirmPass" className="form-label">Confirm password</label>
          <input
          className="form-control"
          name="confirmPass"
          value={confirmPass}
          onChange={(e)=>{setConfirmPass(e.target.value)}}
          />
        </div><br/>
        <div className="form-group">
        <label for="type" className="form-label">Type</label>
          
          <select 
          value={type} 
          onChange={(e)=>{setType(e.target.value)}}
          className="form-control"
          name="type"
          >
            <option value="Customer">Customer</option>
            <option value="Owner">Owner</option>
          </select>
        </div><br/>
        <button 
        type="button" 
        onClick={()=>showAll()}
        className="btn btn-secondary"
        >
          Register
        </button>
        <Link 
        to="/login"
        style={{textDecoration:"none",color:"blueviolet",marginLeft:"10px",marginRight:"10px"}}
        >
          Login
          </Link>
            If you have an account.
      </form>
    </div>
    </div>
  )
}

export default Register