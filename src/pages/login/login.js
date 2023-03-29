import {useState } from "react"
import { useNavigate, useNavigation } from "react-router-dom"
import "./login.css"

import Home from "../home/home"


function Login(){
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [type,setType] = useState("Customer")
  var navigate = useNavigate()
  function showAll(){
    console.log(email,password,type)
    if(email === "" || password === "" || type === "" ){
      return alert("please fill all the fields")
    }
    async function get(){
      var res = await fetch("http://localhost:3000/login/",{
        method:"POST",
        body:JSON.stringify({email,password,type})
      })
      var dt = await res.json()
      if(dt.msg){
        alert(dt.msg)
        setEmail("")
        setPassword("")
        setType("")
      }else{
        navigate(`/${type}/${dt.email.split("@")[0]}?tkn=${dt.tokenId}`)
      }
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
        className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login