
import Lottie from 'lottie-react';
import CatPlaying from '../../../public/CatPlaying.json'

const Catplaying  = () => {
    return (
        <div>
            <Lottie className='w-96 h-96' animationData={CatPlaying}></Lottie>
        </div>
    );
};

export default Catplaying ;