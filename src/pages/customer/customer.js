import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

function Customer({data}){
    let [params] = useSearchParams()
    let [tkn,setToken] = useState(params.get("tkn"))
    let [name,setName] = useState(useParams().id)
    return (
        <div className="container-fluid">
            <h1>Hello {name}</h1>
        </div>
    )
}


export default Customer