import Wavesection4SVG from "../Animations/Wavesection4SVG";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useContext, useEffect } from "react";

const Section3 = () => {

    const {user,handleFavourite,favItem} = useContext(AuthContex)

    useEffect(()=>{
      handleFavourite()
    },[user])

   
    const excluded = [5001, 5007, 5011, 5005]
   const filtered = favItem && favItem.filter(data => !excluded.includes(data.product_id) )


    return (
        <div className=" relative">
            <div className=" pb-36  w-11/12 tab:pt-24 lap:pt-24 des:pt-32 items-center text-center tab:text-left tab:pb-44 lap:pb-60 des:pb-80 tab:w-11/12 lap:w-10/12 des:w-8/12 font-page m-auto tab:flex  tab:justify-between ">

                <div className=" text-primary w-4/5 m-auto tab:m-0 tab:w-3/5 space-y-6 mt-20">
                    <h1 className=" font-semibold text-xl tab:text-2xl lap:text-4xl des:text-6xl leading-snug">Highly Picked Items for Your Furry Friends</h1>
                    <h2 className="w-4/5 m-auto tab:m-0 text-[10px] tab:text-sm lap:text-sm des:text-base text-second">
                    Discover the products our customers and their pets love most! From stylish collars to fun playing products, these highly picked items are guaranteed to make tails wag and purrs louder. Find the perfect choice for your furry friend today

                    </h2>
                </div>

                <div>

             <div className="flex scale-50 tab:scale-50 lap:scale-75 des:scale-100 relative z-10">

                       
                 <div className="p-2  border-2 -rotate-6 bg-fifth border-third">
                    <img className="w-72 z-50 bg-SECOND " src="https://i.ibb.co.com/sVnbHn2/Pet-collar.webp" alt="" />
                    </div>
                 

                <div className="-z-10 p-2 -rotate-12 -bottom-28 -left-32 border-2 bg-fifth border-third absolute">
                    <img className="w-44 bg-third" src={`${filtered && filtered[0]?.product_id ? filtered[0]?.photo_url : 'https://i.ibb.co.com/bB2xWSb/petcage.webp' }`} alt="" />
                    
                    </div>


                <div className="z-20 p-2 -bottom-32 left-16 rotate-6 border-2 bg-fifth border-third absolute">
                    <img className="w-44 z-40 bg-primary" src={`${filtered && filtered[1]?.product_id ? filtered[1]?.photo_url : 'https://i.ibb.co.com/LP3kfWm/Frisbees.webp' }`} alt="" /></div>
                    

                
                    <div className="absolute -bottom-24 -right-32 rotate-6 p-2  border-2 bg-fifth border-third" >
                    <img className="w-44 -z-10  bg-third" src={`${filtered && filtered[2]?.product_id ? filtered[2]?.photo_url : 'https://i.ibb.co.com/30d3dKF/cat-laser-toy.webp' }`} alt="" /></div>
                    
                 </div>



                
                </div>
            </div>
            <div className="absolute w-full bottom-0 tab:-bottom-4  lap:-bottom-12 des:-bottom-32">
            <Wavesection4SVG></Wavesection4SVG>
            </div>

        </div>
    );
};

export default Section3;