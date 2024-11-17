import { createContext, useEffect, useRef, useState } from "react";
import app from "../../firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import supabase from "../../supabase.config";



export const AuthContex = createContext(null)
const auth = new getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
            const [user,setuser] = useState(null)
            const [loader,setloader] = useState(true)
            const [pageload,setpageload] = useState(false)
            const [fetchedData,setfetchedData] =useState(null)
            const [detailsFetch,setDetailsFetch] = useState(null)
            const [loading,setloading] = useState(false)
            const [special , setspecial] = useState(false)
            const [myCart,setmyCart] = useState([])
            const [totalCart,settotalCart] = useState(0)
            const[emaiUsername,setemailUsername] = useState(null)
            const sectionRef = useRef(null)
            const [visible, setVisible] = useState(false);
            const [type, setType] = useState(""); 
            const [message, setMessage] = useState("")
            const [navigating,setnavigate] = useState(false)
            const [favItem,setfavItems] = useState(null)


            console.log('auth loader',loader)


            const handleRegister = (email,password) =>
            {
                setloader(true)
               return createUserWithEmailAndPassword(auth,email,password)
            }   

            const handleSignIn =(email,password)=>{
            
                setloader(true)
                return signInWithEmailAndPassword(auth,email,password)
            }

           

            const handleGoogleSignIn = ()=>{
                setloader(true)
                signInWithPopup(auth,provider)
                

                .then(data => {
                    console.log(data)
                    setuser(data.user)
                    
                    const username = data.user.displayName
                    const email = data.user.email
                    const login_type = 'google'
                    console.log('inside google',username,email)
                    setVisible(true)
                    setMessage('Logged in with Google')
                    setType('success')
                    insertGoogleDB(username,email,login_type)

                    setnavigate(true)


                })
                .catch(error => 
                {
                    setVisible(true)
                    setMessage('Google login failed')
                    setType('error')
                    console.log(error)
                }
                    )
            }


            const handleSignOut = ()=>{
                setloader(true)
                signOut(auth)
                .then(resutl =>
                    {
                        settotalCart(0)
                        
                        setVisible(true)
                        setMessage('Signed Out Successfully')
                        setType('error')
                        setnavigate(false)
                        console.log(resutl)
                    })
            }


            const handleScrollToAllproduct = ()=>{

                sectionRef.current.scrollIntoView({behavior: 'smooth'})
            }



            // supabase codes

            // reading all pet data from database

            const handleFetch = async(query) =>{
                console.log(query)
                
                const  selectFetch = 'pet_id,photo_url,breeds(breed_name),category'
                const selectFetch2 = 'product_id, photo_url, product_name,category'
                
                
                

              const select =   query == 'pet_products' ?  selectFetch2   :  selectFetch 
            const orderItem = query == 'pet_products' ?  'product_id'  : 'pet_id' 

                const {data , error} = await supabase
                .from(query)
                .select(select)
                .order(orderItem,{ascending: true})
                
                
                if(error) console.log(error)
                 
                else
                {
                console.log(data)
                
                setfetchedData(data)
                
                }
            
                
            }


            // reading data of a specific item

            const handleDetailsData = async(type,id)=>{
                setloading(true)
                let query = ''
                console.log(type,id)
                

                if(type == 'cat') query= 'cats'
                if(type == 'dog') query= 'dogs'
                if(type == 'bird') query= 'birds'
                if(type == 'product') query= 'pet_products'
                console.log(query)

                const  selectValue = '*,breeds(breed_name,breed_location)'
                const selectValue2 = '*'
                const whereValue = type == 'product' ? 'product_id' : 'pet_id'



                const {data,error} = await supabase
                .from(query)
                .select(type == 'product' ? selectValue2 : selectValue)
                .eq(whereValue,id)
                
                setDetailsFetch(data)
                
                data ? setloading(false) : ''
                

                console.log(data)
                console.log(error)

            }



            // inserting userdata logged in with email

            const insertRegisterDB =async(email,username,login_type,password)=>{

                const {data,error} = await supabase
                .from('users')
                .insert([
                    {  
                        username:username,
                        email:email,
                        password:password,
                        login_type:login_type
                    }
                ])

                if(error) console.log(error)
                else console.log('inserted data',data)

            }


            //  inserting userdata logged in google

            const  insertGoogleDB = async(username,email,login_type)=>{
                    console.log(username,email)
                    const {data,error} = await supabase
                    .from('users')
                    .select('email,user_id')
                    .eq('email',email)
                    .single()
                    
                    if(error)
                    {

                        const password = null
                        const {data,error} = await supabase
                            
                            .from('users')
                            .insert([{
                                username,
                                email,
                                login_type,
                                password,

                            }])

                        if(error) console.log(error)
                    }

               
            }
            const getUID = async (email)=>{

                const {data,error} = await supabase
                .from('users')
                .select('user_id')
                .eq('email',email)

                

                if(data)
                    {
                        console.log(data)
                        console.log(data[0]?.user_id)
                        
                        return data[0]?.user_id

                    } 

            }
            const getUsername = async (email)=>{

                const {data,error} = await supabase
                .from('users')
                .select('username')
                .eq('email',email)

                if(data)
                    {
                        console.log(data[0].user_id)
                        
                        return data[0].username

                    } 

            }

            // inserting data into cart
            const handleCartIN = async(item_id,category)=>{

                console.log(item_id,category,user.email)

              const userData =  await getUID(user.email)
              const pet_data = await handleDetailsData(category,item_id)

                console.log(userData)
                console.log(detailsFetch)

                if(userData && detailsFetch)
                    {

                    console.log(userData)
                     const user_id = userData
                    const name = detailsFetch[0].category == 'product' ? detailsFetch[0].product_name : detailsFetch[0].breeds.breed_name
                    const availability = detailsFetch[0].availability
                    const price = detailsFetch[0].price
                    const photo_url = detailsFetch[0].photo_url
                    
                    console.log(name,availability,photo_url,price)

                    const {data,error} = await supabase 
                    .from('cart')
                    .insert(
                        [{
                        item_id,
                        category,
                        user_id,
                        name,
                        availability,
                        price,
                        photo_url

                    }])
                    if(!error) 
                    {
                        settotalCart(totalCart + 1)
                        setVisible(true)
                        setMessage('Successfully Added To Cart')
                        setType('success')
                    }
                        

                    if(error) console.log(error)
                    

                }
            }


            // reading cart data 
            const handleGetCart = async() =>{

                const userData =  await getUID(user.email)

                console.log(userData)
                const {data,error} = await supabase
                .from('cart')
                .select('*')
                .eq('user_id',userData)

                setmyCart(data)
                return data
                console.log(data)
            }


            // remove item from the cart
            const handleCartDelete = async(cart_id) =>

                {

                console.log(cart_id)
                const {data,error} = await supabase 
                .from('cart')
                .delete()
                .eq('cart_id',cart_id)
                
                if(!error)
                {
                     totalCart >=0 ? settotalCart(totalCart -1)  : ''
                    setmyCart(myCart.filter(data => data.cart_id != cart_id))

                }
                    
                if(error) console.log(error)

            }
            
            // counting cart items of specific user
            const handleTotalCarts = async()=>{

             
                const user_id = await getUID(user?.email)
                console.log(user_id)
                
                const {data,count,error} = await supabase
                .from('cart')
                .select('item_id',{count: 'exact'})
                .eq('user_id',user_id)

                if(data) 
                {
                    console.log(data,count)
                    settotalCart(count)
                }
                if(error) console.log(error)


            }

            // updating the username in supabase
            const handlenameUpdate = async(newUsername)=>{
                console.log(newUsername)
                console.log(user.email)


                const {data,error} = await supabase 
                .from('users')
                .update({username: newUsername})
                .eq('email',user.email)

                if(!error){
                    setVisible(true)
                    setMessage('Username Changed Successfully')
                    setType('success')
                }
                if(error) console.log(error)
            }
            


        // const handleObjectToArray = async (user_id) => {
        //     const { data, error } = await supabase
        //       .from('cart')
        //       .select('item_id')
        //       .eq('user_id', user_id);
          
        //     if (error) return [];
        //     if(data)
        //     {
        //      return data.map(item => item.item_id);
                
        //     }
        //   }
          
        //   const handleFavourite = async () => {
        //     const user_id = await getUID(user?.email);
        //     const itemIds = await handleObjectToArray(user_id);
          
        //     const { data, error } = await supabase
        //       .from('pet_products')
        //       .select('*')
        //       .in('product_id', itemIds);
          
        //     if(data) console.log(data)
        //     if (error) console.log(error);
        //   }
          
            // use of subquery in supabase
        const handleFavourite = async () => {
            const user_id = await getUID(user?.email);
            
            const cartData  = await handleGetCart()
            console.log(cartData)
            const itemIds = cartData ? cartData.map(item => item.item_id) : [];
            
            const { data, error } = await supabase
              .from('pet_products')
              .select('*')
              .in('product_id', itemIds);
            
            if (data) {
              console.log(data);
              setfavItems(data)
            }
            
            if (error) {
              console.log(error);
            }
          };
          


            // unscubsribe

            useEffect(()=>{
                const unsubsribe = onAuthStateChanged(auth,(user)=>{
                    setuser(user)

                    setloader(false)

                })


                return ()=> unsubsribe()
            },[])

     
            console.log('auth loader',loader)
    const  UserInfo = {
            user,handleRegister,handleSignIn,loader,setloader,setpageload,pageload,handleFetch,
            fetchedData,detailsFetch,handleDetailsData,handleSignOut,handleGoogleSignIn,loading,
            special,setspecial,insertRegisterDB,myCart,setmyCart,handleCartIN,handleGetCart,
            handleCartDelete,handleTotalCarts,totalCart,emaiUsername,getUID,getUsername,
            handlenameUpdate,handleFavourite,sectionRef,handleScrollToAllproduct,
            setVisible,visible,setType,type,message,setMessage,navigating,favItem
    }

    return (
        <div>
            <AuthContex.Provider value={UserInfo}>{children}</AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;