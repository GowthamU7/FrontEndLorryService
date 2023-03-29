import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import LorryDetailsPages from "../lorryDetailsPage/lorryDetailsPage"

function Lorries({childprops}){
    var [vnum,setVnum] = useState("")
    var [maxL,setMaxl] = useState(0)
    var [permit,setPermit] = useState("All india Permit")
    var [data,setLorries] = useState(null)
    useEffect(()=>{
       async function get(){
            var response = await fetch(`http://localhost:3000/lorries?tkn=${childprops.tkn}&uname=${childprops.name}`)
            var responseData = await response.json()
            setLorries(responseData)
        }get()
    },[childprops.tkn])
    
    let display = []

    if(data === null ){
        display.push(<h4>Loading.........</h4>)
    }else if(!data["msg"]){
        for(var i in data["lorries"]){
            var details = 
            {
                lId:data["lorries"][i].lId,
                permit:data["lorries"][i].permit,
                maxLoad:data["lorries"][i].maxLoad,
                status:data["lorries"][i].status,
                currentLoad:data["lorries"][i].currentLoad,
                tkn:childprops.tkn,
                name:childprops.name
            }
            display.push(<LorryDetailsPages key={i} data={details}/>)
        }
    }else{
        display.push(
        <div className="container m-3">
            Session has expired or session doesn't exist
            <Link to="/login"
            style={{textDecoration:"none",color:"blueviolet"}}
            >
              <span className="badge bg-danger m-1">Please login again</span>
            </Link>
        </div>)
    }
    function clearValues(){
        setMaxl(0)
        setVnum("")
        setPermit("All india Permit")
    }

    function addLorry(e){
        clearValues()
    }
    async function onSubmit(){
        if (vnum === "" || maxL === 0) return alert("Fields cannot be empty")
        var response = await fetch(`http://localhost:3000/addlorry?uname=${childprops.name}&tkn=${childprops.tkn}`,
        {
            method:"POST",
            body:JSON.stringify(
                {
                    lId:vnum,
                    maxLoad:maxL,
                    permit:permit
                }
            )
        })
        var dt = await response.json()
        alert(dt.msg)
        window.location.reload()
    }
    return(
        <div className="container">
            <div>
        <button type="button" class="btn btn-success btn-sm m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=>{addLorry(e)}}>
        Add Lorry
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Enter Lorry Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <form>
            <div className="form-group">
                <label htmlFor="lId" className="form-label">Lorry Registration Number</label>
                <input className="form-control" id="rgn" onChange={(e)=>{
                    setVnum((e.target.value).toUpperCase())
                }}
                value={vnum}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lId" className="form-label">Max Load (tones)</label>
                <input className="form-control" id="rgn" onChange={(e)=>{
                    setMaxl(e.target.value)
                }}
                type="number"
                value={maxL}
                />
            </div>
            <div className="form-group">
                <label htmlFor="rgn" className="form-label">choose permit</label>
                <select 
                className="form-control" 
                id="rgn" 
                onChange={(e)=>{setPermit(e.target.value)}}
                value={permit}
                >
                    <option value="All India Permit">All India Permit</option>
                    <option value="state Permit">State Permit</option>
                </select>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" onClick={()=>{onSubmit()}} data-bs-dismiss="modal">Add</button>
    </div>
    </div>
</div>
</div>
</div>
{display.length === 0 ? "You dont have any lorries":display}
    </div>
    )
}


export default Lorries