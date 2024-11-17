import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import LoadingOverlay from "../OtherPages/LoadingOverlay";


const ShowDetails = () => {


    const { handleDetailsData,detailsFetch ,loading,setmyCart,myCart,handleCartIN} = useContext(AuthContex)
  
    const [hoverPrice,sethoverPrice] = useState(false)

    const {type,id} = useParams()
   

    detailsFetch ? console.log(detailsFetch[0]?.pet_id) : ''

    
    useEffect(()=>{
        
        
        handleDetailsData(type,id)
      

    },[type,id])


    const handleAddtoCart =()=>{
        const pet_data = {type: type, id:id}
        

        handleCartIN(id,type)

    }




    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    console.log(detailsFetch)
    return (

        

        <div className="mb-28">

            {
                loading  ? <LoadingOverlay></LoadingOverlay> : 
                
                <>
                <div>        
                {
                    detailsFetch && detailsFetch[0] ? 
                   

         <div className="mt-12">
           
            <div className="font-page  w-11/12 des:w-9/12 m-auto border-2 rounded-lg border-third bg-second text-white">
            <div className="text-2xl tab:text-4xl lap:text-5xl des:text-6xl text-center font-semibold mt-12 mb-12">
                <h1>{detailsFetch[0]?.breeds?.breed_name}</h1> 
                <h1>{detailsFetch[0]?.product_name}</h1> 
                <hr  className="my-8"/>
            </div>
           
            <div className="grid-cols-1 tab:grid-cols-2 space-y-8 tab:space-y-0 grid w-10/12 m-auto mb-20">
                <div className="grid-cols-1 m-auto tab:m-0 relative">
                    <div className=" w-56 h-56 mob:w-72 mob:h-72  tab:w-56 tab:h-56 lap:w-72 lap:h-72 des:w-96 des:h-96  bg-fifth  blur-[1px] rounded-lg  drop-shadow-2xl"></div>
                    <img className="absolute top-0 shadow-primary shadow-2xl bg-transparent w-56 h-56 mob:w-72 mob:h-72  tab:w-56 tab:h-56 lap:w-72 lap:h-72 des:w-96 des:h-96 rounded-lg" src={detailsFetch[0].photo_url} alt="" />
                    
                </div>

                <div className="grid-cols-1">
                <div className="relative flex">
                    <div className="w-10/12 space-y-5">
                    
                        <div className="mob:flex mob:space-x-2 items-center">
                        <h2 className="tab:text-base lap:text-lg des:text-xl font-semibold">{detailsFetch[0]?.product_name ? 'Product Name :' : 'Breed Name : '}</h2>
                        <h1 className="tab:text-sm lap:text-base des:text-lg">{detailsFetch[0]?.product_name}{detailsFetch[0]?.breeds?.breed_name} </h1> 
                        </div>
                        <div className="mob:flex mob:space-x-2 items-center">
                        <h2 className="tab:text-base lap:text-lg des:text-xl font-semibold">{detailsFetch[0]?.product_name ? 'Material :' : 'Origin : '}</h2>
                        <h1 className="tab:text-sm lap:text-base des:text-lg">{detailsFetch[0]?.material}{detailsFetch[0]?.breeds?.breed_location} </h1> 

                        </div>
                        <div className="mob:flex mob:space-x-2 items-center">
                        <h2 className="tab:text-base lap:text-lg des:text-xl font-semibold">{detailsFetch[0]?.product_name ? 'Type :' : 'Gender : '}</h2>
                        <h1 className="tab:text-sm lap:text-base des:text-lg">{detailsFetch[0]?.type}{detailsFetch[0]?.gender} </h1> 

                        </div>
                        <div className="mob:flex mob:space-x-2 items-center">
                        <h2 className="tab:text-base lap:text-lg des:text-xl font-semibold">{detailsFetch[0]?.product_name ? 'Weight :' : 'Personality : '}</h2>
                        <h1 className="tab:text-sm lap:text-base des:text-lg">{detailsFetch[0]?.product_name ? detailsFetch[0]?.weight + 'g' : detailsFetch[0]?.personality_traits } </h1> 

                        </div>
                        <div className="">
                        <h1 className="tab:text-sm lap:text-base des:text-lg text-fourth">{detailsFetch[0]?.product_name}{detailsFetch[0]?.small_description } </h1> 
                        </div>

                        <div className="mob:flex mob:space-x-2 tab:pt-12 items-center">
                        <h2 className="tab:text-base lap:text-lg des:text-xl text-orange-300 font-semibold">{detailsFetch[0]?.product_name ? 'Availability : ' : 'Availability : '}</h2>
                        <h1 className="tab:text-sm lap:text-base des:text-lg">"{detailsFetch[0]?.availability}" </h1> 

                        </div>

                     </div>

                    <div onClick={()=>handleAddtoCart()} className="absolute -right-3 mob:right-0 tab:-right-4 lap:right-0 ">
                        <button onMouseEnter={()=>sethoverPrice(true)} onMouseLeave={()=>sethoverPrice(false)} className="w-24 h-8 tab:w-24 tab:h-10  des:w-32 des:h-12 text-sm tab:text-sm des:text-base rounded-md hover:bg-orange-600 transition-all duration-500 hover:text-white hover:border-white text-orange-500 bg-fifth border-2 border-orange-500">
                            
                            <h1 className={` text-center   font-medium   `}>{hoverPrice ?  detailsFetch[0]?.product_name ? 'Buy Now' : 'Pet me ' : 'Price : '+ detailsFetch[0].price + '$'}</h1>
                            
                            </button>
                    </div>

                </div>
            </div>

            </div>

            </div>



        </div>
                :''
                }

                </div>
                
                </>
            }
            
        </div>
    );
};

export default ShowDetails;