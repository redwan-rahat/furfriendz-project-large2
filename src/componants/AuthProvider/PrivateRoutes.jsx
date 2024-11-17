import { useContext, useEffect, useState } from "react";
import { AuthContex } from "./AuthProvider";
import Catfishing from "../Animations/Catfishing";
import LoadingOverlay from "../OtherPages/LoadingOverlay";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {


        const {user,loader} = useContext(AuthContex)
    
        const nav = useNavigate()
        console.log(loader,user)
     if (loader) return <LoadingOverlay></LoadingOverlay>
    
    if (user) return children

    
     else return <Navigate to={'/login'}></Navigate>

    
};

export default PrivateRoutes;