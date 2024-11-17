import Lottie from "lottie-react";
import dogwalk from '../../../public/DogWalking.json'

const DogWalking = () => {
    return (
        <div>
            <Lottie animationData={dogwalk}></Lottie>
        </div>
    );
};

export default DogWalking;