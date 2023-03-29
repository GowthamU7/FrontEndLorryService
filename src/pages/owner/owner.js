import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import Lorries from "../lorries/lorries"

import { Link } from "react-router-dom"
      
function Owner({data}){
    var [params] = useSearchParams()
    var tkn=params.get("tkn")
    var name = useParams().id
    var childprops = {name,tkn}
    var gotoHome = (e)=>{
        window.location.reload()
    }

    async function onLogout(e){
        var response = await fetch(`http://localhost:3000/logout?uname=${name}&tkn=${tkn}`,{method:'DELETE'})
        var dt = await response.json()
        alert(dt.msg)
        setTimeout(()=>{
            window.location.href="/login"
        },1000)
    }
    async function onLogoutAll(e){
        var response = await fetch(`http://localhost:3000/logoutAll?uname=${name}&tkn=${tkn}`,{method:'DELETE'})
        var dt = await response.json()
        alert(dt.msg)
        setTimeout(()=>{
            window.location.href="/login"
        },1000)
    }

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="row">
                    <div className="col-10 align-self-start m-1">
                        <button className="btn btn-info btn-sm" 
                        onClick={(e)=>gotoHome(e)}
                        >Home</button>
                    </div>
                    <div className="col align-self-end m-1">
                        <button
                        className="btn btn-info btn-sm m-1"
                        >
                        search by Date</button>
                        <button
                        className="btn btn-info btn-sm m-1"
                        onClick={(e)=>{onLogout(e)}}
                        >Logout
                        </button>
                        <button
                        className="btn btn-secondary btn-sm m-1"
                        onClick={(e)=>{onLogoutAll(e)}}
                        >
                            Logout All
                            </button>
                    </div>
                </div>
            </div>
                <div className="main"><Lorries childprops={childprops}/></div>
        </div>
    )
}


export default Owner