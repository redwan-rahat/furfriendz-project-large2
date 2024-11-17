import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import MyCartPet from "./MyCartPet";
import MyCartProducts from "./MyCartProducts";

const MyCart = () => {

    const { handleGetCart,user,myCart,handleFavourite,setVisible,setType,setMessage} = useContext(AuthContex)
    const [cartType,setcartType] = useState(true)

    useEffect(()=>{
      handleGetCart()
      handleFavourite()
    },[user])

   

    const handlePaid =()=>{
       

        
        myCart.length == 0 ? 
            
        (   ()=> {
            setVisible(true)
            setMessage('Bruh!!😒 Add something first')
            setType('error')
         
        })() :
      (  ()=>{
            setVisible(true)
            setMessage("All Your's 😋. Enjoy 🎉")
            setType('success')
           
        })()
        
    }


    return (
        <div className="font-page mb-24">
            
            <div className="w-11/12 m-auto ">

            <h1 className="text-2xl tab:text-4xl lap:text-5xl des:text-6xl  text-center mt-6 text-primary font-semibold">My Cart </h1>
            <hr className=" w-11/12 m-auto my-12 border border-primary border-dashed" />
        
        <div className="w-11/12  tab:w-11/12 des:w-9/12 bg-second rounded-tl-lg rounded-br-lg tab:rounded-tl-xl tab:rounded-br-xl lap:rounded-tl-3xl lap:rounded-br-3xl  text-white py-12 m-auto">


        <div className="grid tab:grid-cols-3 w-11/12 m-auto">
        <div className=" col-span-2 ">

            <div className="  grid z-0 relative grid-cols-2 group text-center font-page  text-primary  font-semibold tab:text-xl lap:text-2xl ">
            <h1 onClick={()=>setcartType(true)} className={`cursor-pointer  w-11/12  m-auto col-span-1 z-10 py-1 tab:py-2 lap:py-3 tracking-wider rounded-md tab:rounded-lg duration-100  shadow-primary ${cartType ? 'border-2 border-white text-white bg-primary shadow-lg' : 'border-2 text-white hover:bg-third/50'}`}>Pet Cart</h1>
            <h2 onClick={()=>setcartType(false)} className={`cursor-pointer  w-11/12 m-auto col-span-1 z-10 py-1 tab:py-2 lap:py-3 tracking-wider rounded-md tab:rounded-lg duration-100  shadow-primary ${cartType ? 'border-2 text-white hover:bg-third/50' : 'border-2border-white text-white bg-primary shadow-lg'}`}>Items Cart</h2>
            {/* <div className={`bg-third absolute   transition-transform   duration-300 h-full -z-10 rounded-lg col-span-1 w-[405px] ${cartType ?'  ' : 'translate-x-[434px]' }  `}></div> */}
            </div>
           
            <div className="m-auto mt-12 ">
                {
                    cartType && myCart != null ? <MyCartPet myCart = {myCart}></MyCartPet> : <MyCartProducts myCart = {myCart}></MyCartProducts>
                }
            </div>
        </div>

        <div className="flex col-span-1">    

        <div className="hidden tab:inline border mx-8 ">

           </div>


        <div className=" mt-2 w-full text-xl tab:text-2xl lap:text-3xl font-medium tab:font-semibold tab:text-center border-white ">
                    <h1 className="">Price</h1>
                    <hr className="border border-dotted w-4/5 tab:m-auto  mt-4" />


                    <div className="mt-6 tab:mt-16 space-y-3 des:space-y-6 w-full tab:w-11/12 mx-auto">
                        {
                            myCart && myCart.map(data => 
                                <>
                                <div className="text-base  tab:text-sm lap:text-base text-left des:text-lg flex tab:inline items-center des:flex  space-x-2 tab:space-x-0 des:space-x-4">
                                    <h2 className=" tab:mt-4 des:mt-0">{data.name} :</h2>
                                    <h1 className=" text-orange-300">{data.price}$</h1>
                                </div>
                                </>
                            )
                        }
                    </div>


                    <hr className="border   mt-8" />
                    <div className="text-lg tab:text-lg lap:text-xl space-x-2 tab:space-x-0 des:space-x-2 des:ml-3  mt-4 flex tab:inline des:flex">
                        <h1 className="">Total Price : </h1>
                    <span className="text-orange-400">{myCart && myCart.reduce((total,item)=> total + item.price ,0)}$</span>
                    </div>

                    <div>
                        <button onClick={()=>handlePaid()} className="text-base tab:text-base lap:text-lg   mt-12 px-4 py-1 rounded-md hover:border-white border-2 hover:bg-primary hover:text-white duration-300 transition-all transform bg-white border-orange-500 text-orange-500 ">Pay Now</button>
                        
                    </div>
        </div>


        </div>

       </div>

       
        </div>


        </div>

        </div>
    );
};

export default MyCart;