import Lottie from "lottie-react";
import Catpush from "../../../public/catpushup.json"
const Catpushup = () => {
    return (
        <div>
            <Lottie animationData={Catpush} className="w-42" ></Lottie>
        </div>
    );
};

export default Catpushup;