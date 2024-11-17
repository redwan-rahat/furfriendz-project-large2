import Lottie from 'lottie-react';
import bouncingball from '../../../public/bouncingball.json'

const BouncingBall = () => {
    return (
        <div>
            <Lottie className='w-40' animationData={bouncingball}></Lottie>
        </div>
    );
};

export default BouncingBall;