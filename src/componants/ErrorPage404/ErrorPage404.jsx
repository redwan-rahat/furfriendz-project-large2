
import Catplaying from "../Animations/Catplaying ";

const ErrorPage404 = () => {
    return (
        <div className="h-screen bg-fifth ">
            
            <div className="relative scale-75 lap:scale-100  pt-40 justify-center grid ">
                <div className="">
            <Catplaying></Catplaying>
            </div>
            <div className=" text-center">

            <h1
            className="absolute transform bottom-8 -translate-x-1/2 bg-gradient-to-r from-primary to-second inline-block bg-clip-text text-transparent font-heading text-2xl tab:text-4xl lap:text-5xl"
            >OOPS TREATS Not Found</h1>
            </div>

            </div>

           
        </div>
    );
};

export default ErrorPage404;