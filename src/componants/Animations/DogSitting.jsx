import Lottie from "lottie-react";
import dogsit from '../../../public/DogSitting.json'

const DogSitting = () => {
    return (
        <div>
            <Lottie animationData={dogsit}></Lottie>
            
        </div>
    );
};

export default DogSitting;