
import { useContext } from "react";
import DownArrow from "../Animations/DownArrow";
import { AuthContex } from "../AuthProvider/AuthProvider";


const Section5 = () => {

   const {setVisible,setType,setMessage} = useContext(AuthContex)

    const handleContract = (e) =>{
        e.preventDefault()

        setTimeout(() => {
            setVisible(true)
        setType('info')
        setMessage('Message Sent Successfully')
        }, 200);
        
        
    }

    return (
        <div className={`bg-fifth font-page pb-20 text-primary`}>

            <div className="w-24 tab:w-44 h-28 des:w-56 tab:h-64 des:h-72 z-10 m-auto">
                <DownArrow></DownArrow>
            </div>

            <div className="text-primary  text-center space-y-3 tab:space-y-6 tab:-mt-16">
                    <h1 className="text-2xl tab:text-4xl lap:text-5xl des:text-7xl font-semibold ">Connect with us</h1>
                    <h2 className="text-sm tab:text-base lap:text-lg">Your pet’s happiness is just a message away</h2>
            </div>

            <div className="w-10/12 tab:w-8/12 des:w-3/6 bg-second m-auto mt-10">

                <div className="w-4/5 m-auto text-white">
                <form className="py-16 tab:py-12 des:py-20" action="">
                   
                   <div className=" tab:flex justify-between space-y-6 tab:space-y-0">
                   <div className="tab:w-2/5 space-y-6 tab:space-y-10">
                    <div className="space-y-2 ">
                        <label className="block text-sm tab:text-base des:text-xl" htmlFor="">Email</label>
                        <input  className="w-full px-2 py-2 text-sm tab:py-1 des:py-2 tab:text-sm des:text-base text-primary focus:outline-primary rounded-sm" required placeholder="example@gmail.com" type="email" />
                    </div>
                    <div className="space-y-2 ">
                        <label className="block text-sm tab:text-base des:text-xl" htmlFor="">Subject</label>
                        <input className="w-full px-2 py-2 text-sm tab:py-1 des:py-2 tab:text-sm des:text-base text-primary focus:outline-primary rounded-sm" required placeholder="what its about" type="text" />
                    </div>
                    </div>


                    <div className="tab:w-2/5 space-y-2">
                        <label className="block text-sm tab:text-base des:text-xl" htmlFor="">Subject (Optional)</label>
                        <textarea className="w-full h-20 tab:h-32 lap:h-36 des:h-40  px-2 py-2 text-sm tab:py-1 des:py-2 tab:text-sm des:text-base text-primary focus:outline-primary rounded-sm" name="description"  placeholder="tell us more" id=""></textarea>
                    </div>

                    

                    </div>
                    <div>
                        <input onSubmit={()=>handleContract()} className="flex scale-75 tab:scale-90 des:scale-100 m-auto mt-12 px-6 py-2 rounded-md border-2 hover:bg-primary hover:border-white hover:text-white duration-300 cursor-pointer border-primary bg-white text-primary font-medium " type="submit" />
                    </div>

                </form>
                </div>
            </div>
            
        </div>
    );
};

export default Section5;