import CatEating from '../Animations/CatEating';
import PetCare from '../Animations/PetCare';
import Secured from '../Animations/Secured';


const Blogs = () => {
    return (
        <div>
            

            <div className="lap:w-11/12 des:w-10/12 font-page m-auto space-y-16 tab:space-y-24 mt-12 tab:pb-36 lap:pb-44 des:pb-56 ">

            <div>
                <h1 className='text-primary text-3xl tab:text-5xl lap:text-6xl des:text-7xl font-semibold text-center'>Explore & Learn</h1>
            </div>

            <div className="tab:flex m-auto des:pt-16 tab:justify-between w-10/12 items-center">
                <div className='m-auto mb-12 tab:mb-0 w-48 h-48  tab:w-40 tab:h-40 lap:h-48 lap:w-48 des:h-64 des:w-64 rounded-full  '>
                <CatEating></CatEating>
                    
                </div>

                <div className="tab:w-3/5 lap:w-3/5 space-y-6">
                    <h1 className="text-base tab:text-xl lap:text-2xl des:text-4xl text-primary font-medium">"How Does Furfriendz Ensure a Safe and Comfortable Pet Delivery to Your Home?"</h1>
                    <h2 className="text-[12px] tab:text-sm des:text-base  text-second">Furfriendz uses secure, climate-controlled vehicles and trained handlers to transport pets comfortably to your home. Our team ensures each pet’s safety and well-being during transit, providing a stress-free arrival for your new companion.</h2>
                </div>

            </div>
            <div className="tab:flex m-auto justify-between w-10/12 flex-row-reverse items-center">
                <div className='m-auto mb-12 tab:mb-0 w-48 h-48  tab:w-48 lap:w-64 des:w-80  tab:h-48 lap:h-64 des:h-80 rounded-full overflow-hidden  '>
                <PetCare></PetCare>
                    
                </div>

                <div className="tab:w-3/5 lap:w-3/5 space-y-6">
                    <h1 className="text-base tab:text-xl lap:text-2xl des:text-4xl text-primary font-medium">"What Are the Benefits of Using Furfriendz’s Pet Care Center?"</h1>
                    <h2 className="text-[12px] tab:text-sm des:text-base  text-second">Our pet care center offers a safe, nurturing space with experienced staff, ensuring pets get the attention, playtime, and care they need while you’re away. It’s a trusted solution for pet owners who want quality care for their animals.</h2>
                </div>

            </div>
            <div className="tab:flex m-auto justify-between w-10/12 items-center pb-28 tab:pb-0">
                <div className='m-auto mb-12 tab:mb-0 w-48 h-48 tab:w-56 lap:w-80 des:w-96 tab:h-56 lap:h-80 des:h-96 rounded-full  '>

                  <Secured></Secured>
                </div>

                <div className="tab:w-3/5 lap:w-3/5 space-y-6">
                    <h1 className="text-base tab:text-xl lap:text-2xl des:text-4xl text-primary font-medium">"How Does Furfriendz Ensure a Safe and Comfortable Pet Delivery to Your Home?"</h1>
                    <h2 className="text-[12px] tab:text-sm des:text-base  text-second">Furfriendz uses secure, climate-controlled vehicles and trained handlers to transport pets comfortably to your home. Our team ensures each pet’s safety and well-being during transit, providing a stress-free arrival for your new companion.</h2>
                </div>

            </div>

            </div>
        </div>
    );
};

export default Blogs;