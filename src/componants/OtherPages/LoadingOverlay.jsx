import { useEffect, useState } from "react";

import CatfishingYellow from '../../../public/Catfishingyellow.json'
import Catfishing from "../Animations/Catfishing";
import Lottie from "lottie-react";

const LoadingOverlay = () => {



    const [dotCount,setdotCount] = useState(1)
    const [changetext,setchangetext] = useState(true)
    const [anim,setanim ] = useState(true)

    useEffect(()=>{
        const interval = setInterval(() => {
            setdotCount((prev) => prev > 2 ? 1 : prev + 1)
        }, 700);
 
        return ()=> clearInterval(interval) 
    },[])

    useEffect(()=>{
        const changeinterval = setInterval(() => {
            setanim(!anim)
            
            setTimeout(() => {
        setchangetext(!changetext)
                
            }, 1500);

        }, 1500);

        return ()=> clearInterval(changeinterval)

    },[anim])

    return (
        
            
    
    <div className="h-screen z-0 items-center">
        <div className=" m-auto w-48 tab:w-60 items-center relative pt-40   drop-shadow-xl z-10 ">
           

        <Lottie animationData={CatfishingYellow} className="w-48 h-48 tab:w-60 tab:h-60"></Lottie>

        </div>
        
        <div className={`${anim ? 'aos-animate' : ''}   text-center tab:-ml-10 -mt-4 z-10 `}  data-aos-duration="500" data-aos='slide-up'>
           
           {
            changetext  ? <h1 className="text-primary text-2xl tab:text-4xl font-page font-semibold">Fetching treats{'.'.repeat(dotCount)}</h1> : 
                          <h1 className="text-primary text-2xl tab:text-4xl font-page font-semibold">Stay tuned for cuteness overload!</h1>
           }
            
        </div>
       


    </div>
    
       
    );
};

export default LoadingOverlay;