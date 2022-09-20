import React,{useContext,useState} from 'react'
import { CartContext } from '../Context/CartContext';
import Card from '../components/shared/Card';
import PaystackPop from '@paystack/inline-js';
import swal from 'sweetalert';


const Cart = () => {
    
  const Cartcont = useContext(CartContext);
  const [openModal,setOpenModal]= useState(false)

    // const myitems =JSON.parse(localStorage.getItem(''))
    // console.log(myitems)

    const cartitems = Cartcont.cartitems;
   
//wrote this shit myself
   function removeItem(id){
       console.log(id)
       const newcartitems = cartitems.filter(cartitem => cartitem.id !== id)
       Cartcont.setCartitems(newcartitems)
   }
   const array=[];

   for(let i =0; i<cartitems.length;i++){
      array.push(parseInt(cartitems[i].price));
       console.log(array)
   }
   

   //total price 
   function TotalPrice(array){
    let sum = 0; // initialize sum 
   
    // Iterate through all elements 
    // and add them to sum 
    for (let i = 0; i < array.length; i++) 
        sum += array[i]; 

    return sum; 
   }
 
  //checkout payments will go here



  return (
    <div className='flex flex-col md:flex-row'>
        <div className='md:overflow-y-auto h-auto w-full py-10 px-10 mr-10 bg-slate-100  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 hidden md:grid'>
          {Cartcont.cartitems.map((cartitem) =>{

          return  <Card key={cartitem.id} >
            <div className='text-right px-3 pt-2'>
              <button className='font-bold' onClick={()=> removeItem(cartitem.id)} >X</button>
            </div>
          <div>
              <img src={cartitem.image} alt="" className='h-[300px] md:h-[350px] w-full p-2 '/>
          </div>
          <div className='p-2 px-3 flex justify-between pr-[20px] '>
                  <p className='text-[15px] '> {cartitem.item}</p>
                  <p className='text-[20px] font-semi-bold'>$ {cartitem.price} </p>
          </div>
           </Card>
          })}
        </div>


  {/* check out list */}
       <div className=' shadow-xl h-full px-2 py-3 w-full '>
          <h2 className='font-bold text-2xl'>My Cart</h2>
          <div>
            {Cartcont.cartitems.length ===0 ? <h1 className='text-[15px] text-center font-bold align-middle mt-5'>Your Cart is empty</h1> :
              Cartcont.cartitems.map((cartitem) =>{
                return(
                  <Card>
                    <div>
                      <ul className=' list-none '>
                          <li className='flex h-[70px] justify-between '>
                            <div className='flex'>
                                <img src={cartitem.image} alt="" className='w-10 mx-10'/>
                                <p>{cartitem.item} ~ ($ {cartitem.price}) </p>
                            </div> 
                            <div className='text-right px-3 pt-2'>
                               <button className='font-bold' onClick={()=> removeItem(cartitem.id)} >X</button>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </Card>
                )
              })
            }
          </div>
          <div className='mt-[100px] '>
            <p className='text-2xl flex '>Total :  <span className='ml-[100px] font-bold'>$ {TotalPrice(array)}</span> </p>
          </div>
          <button className='flex justify-center w-full' onClick={(e)=> Cartcont.cartitems.length ===0  ? swal("Empty Cart", "Add item to the cart!", "error"): setOpenModal(true) }>
                  <div className='border border-1 border-slate-700 sm:pl-2  w-full flex justify-center  h-[70px] mt-10 text-lg pt-6'>
                          <p className='text-center '> Checkout</p>
                  </div>
          </button>
        </div> 


        <PaymentModal  open={openModal} close={()=>setOpenModal(!openModal)} payableamount={TotalPrice(array)}/>

    
    </div>
  )
}

export default Cart



const PaymentModal = ({open,close,payableamount}) => {
  const [email, setEmail] = useState("");
  const [amount] = useState(payableamount);
  const [firstname, setFirstname]= useState("");
  const [lastname,setLastname] = useState("")

  const PaywithPaystack = (e)=>{
    
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key:"pk_live_dce275894c6952273b938d73440b1521f4edbf3a",
      amount:amount*100,
      email,
      firstname,
      lastname,
      onSuccess(transaction){
        let message = `Payment Completed ${transaction.reference}`
        swal("Transaction succesful",message,"success");
        window.location.reload();
      },
      onCancel(){
        swal('You cancelled this transaction',"Transaction cancelled","warning")
      }
    })
  }

  if(!open) return null

    
  
  
  return (

    <div className="   bg-[rgba(68,85,109,0.4)] fixed inset-0 z-50   ">
  
    <div className="flex h-screen justify-center items-center opacity-100">

        <div className="flex-col justify-center absolute opacity-100  bg-white py-4 px-4 w-[300px]  md:w-[500px]  rounded-lg ">

            <div className="flex  text-lg  text-zinc-600 justify-between  mb-7 border-b py-2 border-b-slate-100"  >
              <p className='text-xl font-bold '>Enter Payment Details</p>
              <p onClick={close} className=' cursor-pointer text-slate-400 font-bold '>x</p>
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Email</p>
                <input type="text" name="" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={"Email"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Amount</p>
               <input type="text" name="" id=""disabled value={amount} placeholder={payableamount} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Firstname</p>
                <input type="text" name="" value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder={"Firstname"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Lastname</p>
                <input type="text" name="" value={lastname} onChange={(e)=> setLastname(e.target.value)} placeholder={"Lastname"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>


            <div className='flex justify-center mt-4'>
                <button onClick={PaywithPaystack} className={'bg-white border-[1px] border-slate-900 px-[10px] pt-[7px] pb-[16px] w-[220px]  rounded-md h-[40px]  '}><p className=''>Pay</p></button>
            </div>
      

        </div>
    </div>
</div>

  )
}