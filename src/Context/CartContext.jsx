import React,{createContext,useState} from 'react'


const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartitems,setCartitems]   = useState(["apple","yam"]);

  return (
    <CartContext.Provider value={{cartitems,setCartitems}}>
        {children}
    </CartContext.Provider>
  )
}

export  {CartContext,CartContextProvider}