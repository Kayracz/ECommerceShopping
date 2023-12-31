import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
  
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckOutSideMenu()
        context.closeProductDetail()
    }
    
  return (
     <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => showProduct(data.data)}> 
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 line-clamp-1">{data.data.title}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="headphones"></img>

            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
        onClick={(event) => addProductToCart(event, data.data)}>
        <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
       </div>

        </figure>
        <p className="flex justify-between">
         <span className="text-sm font-light line-clamp-1">{data.data.title}</span>
         <span className="text-sm font-medium">Bs.{data.data.price.toFixed(2)}</span>
        </p>
     </div>
    )
}

export default Card