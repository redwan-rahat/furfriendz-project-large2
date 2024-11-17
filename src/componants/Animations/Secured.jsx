import Lottie from 'lottie-react';
import security from '../../../public/Secured.json'

const Secured = () => {
    return (
        <div>
            <Lottie animationData={security}></Lottie>
        </div>
    );
};

export default Secured;