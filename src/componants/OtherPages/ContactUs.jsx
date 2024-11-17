import { useContext, useLayoutEffect } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiInformation2Line } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ContactUs = () => {
    const {screenmode} = useContext(AuthContex)
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="h-auto tab:mt-12 mt-8 w-10/12 mb-20 tab:mb-20 m-auto font-page text-primary">
                <div >
                    <h1 className={`text-center text-3xl tab:text-5xl des:text-6xl  font-semibold`}>Contact Us</h1>
                </div>

                <div className={`grid tab:grid-cols-2 lap:grid-cols-4 space-y-4 tab:space-y-0  mt-8 tab:mt-20 ml-12  tab:ml-20 lap:ml-0 `}>

                <div className="lap:text-base des:text-lg w-10/12 scale-90 tab:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl `}><BiPhoneCall /></h1>
                    <h2 className="tab:text-sm lap:text-base font-medium">+880-123-456-7890</h2>
                    </div>
                    <h1 className="lap:text-base des:text-lg text-second tab:mb-8 lap:mb-0">Call us: Monday-Friday (8:00-17:00)</h1>
                </div>
                <div className="lap:text-base des:text-lg w-10/12 scale-90 tab:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl `}><HiOutlineLocationMarker /></h1>
                    <h2 className="tab:text-sm lap:text-base font-medium">Bangladesh</h2>
                    </div>
                    <h1 className="lap:text-base des:text-lg text-second tab:mb-8 lap:mb-0">1234 Green Park Lane, Dhaka, Bangladesh</h1>
                </div>
                <div className="lap:text-base des:text-lg w-10/12 scale-90 tab:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl `}><RiInformation2Line /></h1>
                    <h2 className="tab:text-sm lap:text-base font-medium">contact@furfriendz.com</h2>
                    </div>
                    <h1 className="lap:text-base des:text-lg text-second tab:mb-8 lap:mb-0">Drop a message anytime you want</h1>
                </div>
                <div className="lap:text-base des:text-lg w-10/12 scale-90 tab:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-3xl `}><ImProfile /></h1>
                    <h2 className="tab:text-sm lap:text-base font-medium">jobs@furfriendz.com</h2>
                    </div>
                    <h1 className="lap:text-base des:text-lg text-second tab:mb-8 lap:mb-0">Join us in shaping a brighter tomorrow with Furfriendz!</h1>
                </div>

                </div>
                <div  className="flex mt-16 space-x-6 w-10/12 m-auto justify-center">
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border-2 w-12 border-primary hover:text-white hover:bg-primary  cursor-pointer duration-300 ease-in-out `}>
                    <h1 className={`text-2xl  `}><IoLogoYoutube /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border-2 w-12 border-primary hover:text-white hover:bg-primary  cursor-pointer duration-300 ease-in-out `}>
                    <h1 className={`text-2xl `}><FaXTwitter /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border-2 w-12 border-primary hover:text-white hover:bg-primary  cursor-pointer duration-300 ease-in-out `}>
                    <h1 className={`text-2xl `}><FaFacebook /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border-2 w-12 border-primary hover:text-white hover:bg-primary  cursor-pointer duration-300 ease-in-out `}>
                    <h1 className={`text-2xl `}><RiInstagramFill /></h1>
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;