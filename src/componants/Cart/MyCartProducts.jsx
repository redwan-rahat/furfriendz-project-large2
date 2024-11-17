import { useContext, useEffect, useState } from "react";
import DeleteModal from "../OtherPages/DeleteModal";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";


const MyCartProducts = ({myCart}) => {
    
    const {handleCartDelete} = useContext(AuthContex)
   
    const [modalOpen,setmodalOpen] = useState(false)
    const [selectedDelete,setSelected] = useState(null)
    const [noValue,setnoValue] = useState(false)

    const handleDelete =()=>{
       
        setmodalOpen(false)
        handleCartDelete(selectedDelete)
    }

    useEffect(()=>{

     
        if(myCart.length == 0) 
            setnoValue(true) 


       myCart.map(data => data.category != 'product' ? setnoValue(true) : setnoValue(false))
       
    },[myCart])


  

    return (
        <div className="">

            {
                noValue && 
                <div className="text-center font-medium text-sm tab:text-xl lap:text-2xl pb-8 tab:pb-0 tab:pt-4 lap:pt-8">
                    <h1>You Haven't Added Anything Yet</h1>
                </div>
            }
            <div>

                {
                    myCart && myCart.map(data => 
                    <>
                       
                       
                      {
                        (data.category == 'product') && 
                      
                        
                        <div className="border-2 mb-5  border-fifth rounded-lg">
                           
                           <div className="grid grid-cols-3 bg-third tab:mx-2 tab:my-2  rounded-lg ">
                           <NavLink to={`/details/${data.category}/${data.item_id}`}>
                            <div className="   col-span-1 border-primary border-r-2">
                            <img className="w-24 tab:w-36 lap:w-44 m-auto object-cover  " src={data.photo_url} alt="" />

                            </div>
                            </NavLink>

                            <div className="flex text-[12px] tab:text-xs lap:text-base w-11/12 m-auto justify-between col-span-2">

                            <div>
                                <h1 className="font-medium text-primary mt-2"><span className="text-primary font-semibold">Breed :</span> {data.name}</h1>
                                <h1 className="font-medium text-primary"><span className="text-primary font-semibold">Category :</span> {data.category}</h1>
                                <h2 className="font-medium text-primary tab:mt-6 lap:mt-10"><span className="text-orange-500 font-semibold">Availability :</span> {data.availability}</h2>
                            </div>

                            <div className="justify-end">
                            <h2 className="font-medium text-orange-500 mt-2"><span className="text-primary font-semibold ">Price :</span> {data.price}$</h2>
                            <div className="tab:w-16 tab:h-8  lap:w-24 lap:h-10 mt-4 tab:mt-7 lap:mt-12 flex items-center justify-center  text-red-500 font-medium border-red-500 border tab:border-2 tab:rounded-md cursor-pointer hover:bg-red-600 duration-300 hover:text-white hover:border-white bg-fifth">
                                <h3 onClick={()=>{setmodalOpen(true),setSelected(data.cart_id)}} className=" ">Delete</h3>
                            </div>
                            </div>

                            </div>

                            </div>

                        </div>
                       
                      
                      }
                        
                        
                        
                    </>
                    )
                }


            <DeleteModal
            isOpen={modalOpen}
            onClose={()=>setmodalOpen(false)}
            onConfirm={handleDelete}
            ></DeleteModal>

            </div>
            
        </div>
    );
};

export default MyCartProducts;