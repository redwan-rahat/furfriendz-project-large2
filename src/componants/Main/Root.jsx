import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../HomePage/Home";
import Navbar from "../Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import LoadingOverlay from "../OtherPages/LoadingOverlay";
import ModalAlert from "../OtherPages/ModalAlert";
// ..
AOS.init();

const Root = () => {
    const {setloader,setpageload,pageload,loader} = useContext(AuthContex)
    
    useEffect(()=>{
        setTimeout(() => {
            setpageload(true)
            setTimeout(() => {
                setpageload(false)
            }, 1000);
        }, 100);
    },[])
    


    return (
        <div className=" bg-fifth z-10">
        <div className={`${ pageload ? '' : 'hidden'}`} ><LoadingOverlay></LoadingOverlay></div>
            
            <div className={`${ pageload ? 'hidden' : ''} z-10`}>

            <div className="">
                <ModalAlert></ModalAlert>
            </div>
            <div className="relative z-10">
                <Navbar></Navbar>
            </div>
            <div className="relative z-0">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
            </div>
        </div>
    );
};

export default Root;