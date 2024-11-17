import Lottie from 'lottie-react';
import parrotfly from '../../../public/parrotflying.json'

const Parrotflying = () => {
    return (
        <div>
            <Lottie className='w-60' animationData={parrotfly}></Lottie>
        </div>
    );
};

export default Parrotflying;