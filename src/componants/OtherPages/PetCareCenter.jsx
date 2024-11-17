import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DogWalking from "../Animations/DogWalking";


const PetCareCenter = () => {

        const data = useLoaderData()
        console.log(data)

        const [showCam,setshowCam ] = useState('CAM01')
        const [viewImage,setviewImg] = useState(data[0].imageLink ? data[0].imageLink : '')

        const [showLoad,setshowLoad] = useState(false)
        console.log(data[0].imageLink)

        const handleLoad = ()=>{
                setshowLoad(true)

                setTimeout(() => {
                    setshowLoad(false)
                }, 2000);
        }



        
    return (
        <div className=" font-page text-primary pb-28">

                <div className="text-center font-semibold text-3xl tab:text-5xl lap:text-6xl mt-8  ">
                    <h1>Pet Care Centers </h1>
                </div>
                <hr className="w-3/5 border-dashed border border-primary m-auto mt-8 "/>
                
                <div className="w-9/12 m-auto mt-12 tab:mt-16  ">


                {/* Tablet (around 600px width):
                Width: 640 pixels
                Height: 360 pixels
                Mobile (around 300px width):
                Width: 320 pixels
                Height: 180 pixels */}

                <div className="bg-second w-[240px] h-[130px] mob:w-[320px] mob:h-[180px]  tab:w-[600px] tab:h-[340px] lap:w-[752px] lap:h-[423px] m-auto rounded-md ">
                    {
                        showLoad ? <div className="  h-auto tab:w-64 m-auto">
                        <DogWalking></DogWalking>
                        </div>  : ''

                    }
                    <img className={`bg-second p-2 rounded-md ${showLoad ? 'hidden' :''}`} src={viewImage} alt="" />

                    
                </div>

                <div className="mt-8 m-auto">

                    <div className=" grid lap:grid-cols-2 des:grid-cols-3 des:w-full ">
                        {
                            data && data.map(data => <>
                          
                            <div onClick={()=>{setshowCam(data.cameraID),setviewImg(data.imageLink),handleLoad()}} className={`w-10/12 text-[8px] mob:text-[10px] tab:text-base lap:text-sm des:text-base  mt-6 m-auto hover:bg-primary cursor-pointer duration-200 rounded-md hover:text-white p-2 mob:p-4 ${showCam == data.cameraID ? 'bg-primary text-white' : 'bg-third'}`}>
                                <div className="flex space-x-3  des:text-base">
                                    <h1 className="font-medium">Center Name :</h1>
                                    <h2>{data.petCenterName}</h2>
                                </div>
                                <div className="flex space-x-3  des:text-base">
                                    <h1 className="font-medium">CAM ID :</h1>
                                    <h2>{data.cameraID}</h2>
                                </div>
                                <div className="flex space-x-3  des:text-base">
                                    <h1 className="font-medium">Location :</h1>
                                    <h2>{data.location}</h2>
                                </div>
                                <div className="flex space-x-3  des:text-base">
                                    <h1 className="font-medium">Status :</h1>
                                    <h2 className={`${data.liveStatus == 'Offline' ? 'text-red-500' : ''}`}>{data.liveStatus}</h2>
                                </div>
                            </div>
                            
                            </>)
                        }

                    </div>
                </div>



                </div>
        </div>
    );
};

export default PetCareCenter;