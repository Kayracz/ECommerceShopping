import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shopping cart - incrementing quantity
    const [count, setCount] = useState(0)

    //Product detail - Open/closing
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {setIsProductDetailOpen(true)}
    const closeProductDetail = () => {setIsProductDetailOpen(false)}

    //Checkout Side Menu - Open/closing
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
    const openCheckOutSideMenu = () => {setIsCheckOutSideMenuOpen(true)}
    const closeCheckOutSideMenu = () => {setIsCheckOutSideMenuOpen(false)}
    
    //Product detail - Show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        image: [],
      });
    
    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Orders - Show order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}