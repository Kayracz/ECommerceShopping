import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"
import './styles.css'

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts) 
  }
  

  return (
    <aside 
    className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed border border-black rounded-lg bg-white right-1`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
         <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={()=> context.closeCheckOutSideMenu()}></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
      {
        context.cartProducts.map((product) => (
           <OrderCard 
           id={product.id} 
           key={product.id} 
           title={product.title} 
           imageUrl={product.image} 
           price={product.price}
           handleDelete={handleDelete}
           />
          )
        )
        }
        </div>
        <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>Bs.{totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu