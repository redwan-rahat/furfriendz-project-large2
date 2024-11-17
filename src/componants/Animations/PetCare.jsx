import Lottie from "lottie-react";
import petcare from '../../../public/PetCare.json'
const PetCare = () => {
    return (
        <div>
            <Lottie className="" animationData={petcare}></Lottie>
        </div>
    );
};

export default PetCare;