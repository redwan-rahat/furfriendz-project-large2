import { useEffect, useState } from "react";
import Foxye from "../Animations/Foxye";
import Catpushup from "../Animations/Catpushup";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import BouncingBall from "../Animations/BouncingBall";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const Section1Carousal = () => {


    const [visible,setvisible] = useState(false)
    const [currentimgidx , setindx ] = useState(0)
    const [currpage , setcurrpage] = useState('Option1')
    const [currpagenum,setcurrpagenum] = useState(1)
    const [fade,setfade] = useState('fade-in')
    const [controlaos,setcontrolaos] = useState(false)
   
   
    const handlePrev = (e)=>{
        setcontrolaos(false)
        
        e.preventDefault()

        let temp  = currpage.split('')
       

        const page = temp[temp.length - 1]


        const newpage = page <= 3 && page-1 !== 0 ? page - 1 : 3;


      temp[temp.length - 1] = newpage
      setcurrpagenum(newpage)
        let raf = temp.join('')
        setcurrpage(raf)
        
        

        
    }

    setTimeout(() => {
        setcontrolaos(true)
    }, 150);

    const handleNext =(e)=>{
        setcontrolaos(false)
        e.preventDefault()
        let temp = currpage.split('')

        const page = temp[temp.length-1]
        const newpage = page >= 1 && Number(page) + 1 !== 4 ? Number(page) + 1 : 1;

        temp[temp.length - 1] = newpage
       
        setcurrpagenum(newpage)
        let raf = temp.join('')
        setcurrpage(raf)
        
        
    }

    useEffect(()=>{

        setTimeout(() => {
            setvisible(true)
        }, 500);

        return ()=>clearTimeout()

    },[])

    const carousalData = {
        
        
        
           Option1: {
                "lefttext": "Discover the true joy of adopting a pet!",
                "righttext": "Adopt today to enjoy the discounts!",
                "images": [
                    "https://i.ibb.co.com/wRNDLYv/Maine-Coon-B.webp",
                    "https://i.ibb.co.com/QPCxh8x/Short-Haired-tabby-B.webp",
                    "https://i.ibb.co.com/2yL9xCC/Turkish-Angora-B.webp"
                ]
            },
            Option2:{
                "lefttext": "Exclusive deals available for all pet lovers!",
                "righttext": "Save 20% on accessories for pets!",
                "images": [
                    "https://i.ibb.co.com/XLgq5H2/Maltese-B.webp",
                    "https://i.ibb.co.com/1ntzFPT/Shiba-Inu-B.webp",
                    "https://i.ibb.co.com/3R9Xp28/White-German-Shepherd-B.webp"
                ]
            },
            Option3:{
                "lefttext": "Explore our new arrivals for pets now!",
                "righttext": "Shop trendy products for happy pets!",
                "images": [
                    "https://i.ibb.co.com/8YsgfCn/Saffron-Finch-B.webp",
                    "https://i.ibb.co.com/z6XmNNy/Scarlet-Macaw-B.webp",
                    "https://i.ibb.co.com/DrKkCSw/Quaker-Parrot-B.webp"
                ]
            }
        
        
        
        
        
        
        };
  
    const imgloop = carousalData[currpage].images
  
    useEffect(()=>{
           const interval =  setInterval(() => {
            setfade('fade-out')

            setTimeout(() => {
                
            setindx(currentimgidx == carousalData[currpage].images.length - 1 ? 0 : currentimgidx + 1)
             
            setfade('fade-in')
            }, 1000);
            }, 4000);

            return () => clearInterval(interval);
    },[currentimgidx])
    


    return (
        <div className="relative">
           
            <div className="relative  justify-center w-11/12 m-auto lap:-mt-20 des:mt-0 flex">
                {/* lefttext */}

                <div className="absolute hidden tab:flex lap:-space-x-2 des:-space-x-7 font-page text-primary tab:w-[200px] lap:w-[300px] des:w-[550px] font-semibold text-left left-2 tab:top-60 lap:top-72 items-start ">
                <div className=" lap:w-36 tab:hidden lap:flex des:-mt-1 des:w-80">
                    <Foxye></Foxye>
                </div>
                <h1 className={`tab:text-2xl des:text-5xl lap:text-3xl from-primary to-primary bg-clip-text leading-tight  text-transparent bg-gradient-to-tr ${controlaos ? 'aos-animate' : ''}`} data-aos-duration="300"   data-aos ='zoom-in-right'>
                    {
                        carousalData[currpage].lefttext
                    }
                </h1>
                </div>

                {/* carousal */}


                <div className={`${fade == 'fade-in' ? 'opacity-100' : 'opacity-0'} ${controlaos ? 'aos-animate' : ''} transition-opacity duration-1000`} data-aos = 'fade'>
                    {
                <img src={carousalData[currpage].images[currentimgidx]} className=" w-[400px] h-[400px] tab:w-[550px] tab:h-[550px] des:w-[700px] lap:w-[550px] lap:h-[550px] des:h-[700px] m-auto " alt="" />
                        
                    }
                </div>



                
                {/* righttext */}
                
                <div className="absolute hidden  tab:inline lap:-space-y-4 des:-space-y-5 font-page text-primary  text-xl tab:w-[150px] lap:w-[180px] des:w-[250px] font-semibold tab:right-0 lap:right-20 des:right-64 bottom-24 lap:bottom-0 ">

                <div className="lap:w-16  lap:h-16 des:w-28 des:h-28">
                    <BouncingBall></BouncingBall>
                </div>
                <h1 className={`tab:text-sm des:ml-9 lap:text-sm des:text-xl ${controlaos ? 'aos-animate' : ''}`} data-aos = 'slide-up'>
                    {
                        carousalData[currpage].righttext
                    }
                </h1>
                <div className={`des:ml-9 tab:w-28 tab:h-28 lap:w-36 lap:h-36 des:w-44 des:h-44 ${controlaos ? 'aos-animate' : ''}`} data-aos = 'slide-up'>
                    <Catpushup></Catpushup>
                </div>
                </div>
            
                <div className="absolute flex tab:left-0 top-28 scale-90 mob:scale-100 tab:top-auto -translate-x-32 mob:-translate-x-40  tab:translate-x-0  tab:bottom-44 lap:left-24 des:left-72 text-primary font-bold lap:bottom-32 des:bottom-60 w-44  space-x-1 lap:space-x-2 px-4 justify-center rounded-lg ml-3"> 
            <button className="  text-lg  lap:text-xl des:text-3xl  hover:scale-110 transform ease-out transition-all duration-500  hover:pr-3 " onClick={handlePrev}><GoArrowLeft /></button>
            <h1 className={` lap:lg des:text-xl`}>{currpagenum}/3</h1>
            <button className=" text-lg  lap:text-xl des:text-3xl  hover:scale-110 transform ease-out transition-all duration-500 hover:pl-3 " onClick={handleNext}><GoArrowRight /></button>   
            </div>

            </div> 

            

        </div>
    );
};

export default Section1Carousal;