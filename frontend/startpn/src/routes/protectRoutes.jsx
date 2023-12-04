import { Navigate, Outlet } from "react-router-dom";


const  ProtectRoute = () =>{
    const userToken = localStorage.getItem("authToken");
    return(
        userToken ? <Outlet/> : <Navigate  to="/"/>
    )
}

export default ProtectRoute