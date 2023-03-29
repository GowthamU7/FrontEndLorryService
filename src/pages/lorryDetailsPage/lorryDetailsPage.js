import { useState } from "react"

function LorryDetailsPages({data}){
    
    var [vnum,setVnum] = useState(data.lId)
    var [maxL,setMaxl] = useState(data.maxLoad)
    var [permit,setPermit] = useState(data.permit)
    
    async function onClickDelete(e){
        var response = await fetch(`http://localhost:3000/deletelorry?uname=${data.name}&tkn=${data.tkn}&lId=${data.lId}`,{
            method:"DELETE",
        })
        var responseData = await response.json()
        alert(responseData.msg)
        setTimeout(()=>{
            window.location.reload()
        },1000)
    }
    async function onSubmit(e){

    }
    return (
        <div class="card m-3">
            <div className="row card-header">
                <div className="col-8">
                    <h3>
                        Vehicle No - {data.lId}
                    </h3>
                </div>
                <div className="col">
                <div class="dropdown">
                    <button 
                    class="btn btn-secondary dropdown-toggle"  
                    role="button" 
                    id="dropdownMenuLink" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    >
                    quick actions
                </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><button class="dropdown-item" onClick={(e)=>{onClickDelete(e)}} >Delete</button></li>
                    <li>
                    {
                    <div>
                    <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit Lorry Detail
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
                    }
                    </li>
                    <li><button class="dropdown-item" >Edit Lorry Details</button></li>
                </ul>
            </div>
                </div>
            </div>
        <div class="card-body">
          <h6 class="card-title">
            <span className="badge bg-dark">{data.permit}</span>
          </h6>
          <div className="card-text m-1">
            <div className="row m-2 align-items-start">
                <div className="col">
                    <h6>
                    MaxLoad - {data.maxLoad} Tones
                    </h6>
                </div>
                <div className="col">
                    Status -  
                    <span 
                    className={data.status === "free" ? "badge bg-success m-1":"badge bg-danger m-1"}>{data.status}</span>
                </div>
            </div>
            <div className="row m-2 align-items-end">
                <div className="col">
                    <h6>
                    currentLoad - {data.currentLoad} Tones
                    </h6>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default LorryDetailsPages