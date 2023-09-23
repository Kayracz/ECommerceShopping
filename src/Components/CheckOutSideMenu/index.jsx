import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"
import './styles.css'

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const productCounts = {};

  // Count product occurrences by ID
  context.cartProducts.forEach((product) => {
    if (productCounts[product.id]) {
      productCounts[product.id]++;
    } else {
      productCounts[product.id] = 1;
    }
  });

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts) 
  }

  // Define an array to keep track of rendered product IDs
  const renderedProductIds = [];
  
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
      {context.cartProducts.map((product) => {
          // Check if the product ID has already been rendered
          if (!renderedProductIds.includes(product.id)) {
            // If not rendered, add it to the array and render the OrderCard
            renderedProductIds.push(product.id);
            return (
              <OrderCard 
                id={product.id} 
                key={product.id} 
                title={product.title} 
                imageUrl={product.image} 
                price={product.price}
                handleDelete={handleDelete}
                quantity={productCounts[product.id] || 1} // Display count (default to 1 if not found)
                count={product.count} // Pass the count as a prop
              />
            );
          } else {
            // If already rendered, return null (no rendering)
            return null;
          }
        })}
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