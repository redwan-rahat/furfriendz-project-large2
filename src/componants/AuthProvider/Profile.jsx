import { useContext, useEffect, useRef, useState } from "react";
import { AuthContex } from "./AuthProvider";
import { Icon } from '@iconify/react';

const Profile = () => {
    const {user,totalCart,emaiUsername,getUsername,handlenameUpdate,setVisible,setType,setMessage} = useContext(AuthContex)
    const [fethedname,setfetchedname] = useState(null)
    const [readOnly,setreadOnly] = useState(true)
    const [showUpdate,setShowupdate] = useState(false)
    const [isgoogle,setisGoogle] = useState(false)
    const [unchangeuser,setunchageuser] = useState(null)

    const userRef = useRef()
    const gettingUID = async()=>{

   
            const data = await getUsername(user.email)
       
            setfetchedname(data)
            setunchageuser(data)
    }

    const UpdateUsername = (e)=>{
       
            const newUsername = userRef.current.value

            if(unchangeuser == newUsername) {
                setVisible(true)
                setMessage('choose a new username')
                setType('error')

            }

            else{
             handlenameUpdate(newUsername)

            }
            unchangeuser == newUsername ?

             setfetchedname('username cannot be same') : 
             
            
          ''
    }
   
    useEffect(()=>{
       


        if(user.displayName != null)
        {
            setisGoogle(true)
    
        }

        else {
         
            gettingUID()
    
        }
        

    },[user])

 
    return (
        <div className="pb-20 font-page">
                <div className="bg-second text-white w-4/5 tab:w-4/5 lap:w-3/5 des:w-2/5 m-auto mt-8 tab:mt-20">
                    <h1 className="font-semibold text-center py-12 text-3xl tab:text-5xl">Your Info</h1>
                    <hr  className="w-3/5 m-auto pb-12"/>

                    <div className="w-3/5 m-auto space-y-4 pb-20">

                        <div className="flex  justify-center ">
                            {
                                isgoogle ? <img src={user.providerData[0].photoURL} className="rounded-full w-32 tab:w-44" alt="" /> : 
                                <Icon icon="healthicons:ui-user-profile" className="text-[150px] tab:text-[200px]"  />
                            }
                        </div>
                        <div className="tab:flex tab:space-x-6 space-y-3 tab:space-y-0 pt-8 items-center justify-between">

                        
                        <h2>Username</h2>
                        <div className="tab:space-x-2 relative tab:w-3/5 tab:items-center tab:justify-center  flex">
                            <h3 className="tab:flex hidden">:</h3>
                        <input onChange={()=>setShowupdate(true)} ref={userRef} name="username" type="text" readOnly={readOnly}  value={isgoogle ? user.displayName : null} placeholder={user.user?.displayName ? null : fethedname} className="caret-primary  py-1 px-1.5 focus:outline-0 text-primary font-medium w-4/5 rounded-sm"/>
                        {
                         
                        !isgoogle && 
                        <Icon onClick={()=>{setreadOnly(false),setfetchedname('new username!')}}  icon="pepicons-print:pen" className= {`${showUpdate ? 'hidden' : ''} cursor-pointer absolute right-4 mt-1 tab:mt-0 tab:-right-2 text-xl text-red-500`} />
                            
                        }
                        <button onClick={()=>UpdateUsername()}  className={`absolute ${showUpdate ? '' : 'hidden'} text-sm -right-10 tab:-right-16 px-2 py-1 bg-primary text-white hover:bg-white hover:border-primary border-2 hover:text-primary duration-300 rounded-sm `}>Update</button>

                        </div>
                        </div>

                        <div className="tab:flex tab:space-x-6 space-y-3 tab:space-y-0 justify-between items-center">

                        
                        <h2>Email</h2>
                        <div className="tab:space-x-2 tab:w-3/5 w-full   tab:items-center tab:justify-center  flex">
                            <h3 className="tab:flex hidden">:</h3>
                        <input type="text" readOnly value={user.email} className=" py-1 px-1.5 focus:outline-0 text-primary font-medium w-4/5 rounded-sm"/>

                        </div>
                        </div>
                        <div className="tab:flex tab:space-x-6 space-y-3 tab:space-y-0 justify-between items-center">

                        
                        <h2>Account Type</h2>
                        <div className="tab:space-x-2 tab:w-3/5 w-full   tab:items-center tab:justify-center  flex">
                            <h3 className="tab:flex hidden">:</h3>
                        <input type="text" readOnly value={'Free'} className="py-1 px-1.5 focus:outline-0 text-primary font-medium w-4/5 rounded-sm"/>

                        </div>
                        </div>
                        <div className="tab:flex tab:space-x-6 space-y-3 tab:space-y-0 justify-between items-center">

                        
                        <h2>Items In Cart</h2>
                        <div className="tab:space-x-2 tab:w-3/5 w-full   tab:items-center tab:justify-center  flex">
                            <h3 className="tab:flex hidden">:</h3>
                        <input type="text" readOnly value={totalCart} className="py-1 px-1.5 focus:outline-0 text-primary font-medium w-4/5 rounded-sm"/>

                        </div>
                        </div>

                       
                    </div>
                </div>  

        </div>
    );
};

export default Profile;