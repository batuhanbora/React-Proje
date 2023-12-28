import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartOpen, setCartOpen] = useState(false)

    const handleCart = () =>{
        setCartOpen((prevCartOpen)=>!prevCartOpen)
    };

  return (
    <CartContext.Provider value={{
        cartOpen,
        handleCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
