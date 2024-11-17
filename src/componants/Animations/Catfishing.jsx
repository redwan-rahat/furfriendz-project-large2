import Lottie, { LottiePlayer } from "lottie-react";
import catfishing from "./../../../public/catfishing.json";

const Catfishing = () => {
  return (
    <div>
      <div>
        <Lottie className="w-60 h-60 " animationData={catfishing}></Lottie>
      </div>
    </div>
  );
};

export default Catfishing;
