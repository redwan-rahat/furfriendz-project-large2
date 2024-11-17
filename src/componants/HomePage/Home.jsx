
import { useContext } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { AuthContex } from "../AuthProvider/AuthProvider";


const Home = () => {

    const {sectionRef} = useContext(AuthContex)
  


    return (
    
        <div className="z-20">
            <div>
            <Section1></Section1>

            </div>

            <div className="" ref={sectionRef}>
            <Section2></Section2>
        </div>

            <div className="">
                <Section3></Section3>

            </div>

            <div className="">
                <Section4></Section4>
            </div>
            <div className="">
                <Section5></Section5>
            </div>
        </div>
       
    );
};

export default Home;