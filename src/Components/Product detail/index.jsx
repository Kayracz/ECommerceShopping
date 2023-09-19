import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside 
    className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed border border-black rounded-lg bg-white right-1`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
         <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={()=> context.closeProductDetail()}></XMarkIcon>
        </div>
      </div>
        <figure className="px-6"> 
          <img className="w-full h-full rounded-lg" 
          src={context.productToShow.image} 
          alt={context.productToShow.title}>
          </img>
        </figure>
        <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">Bs.{context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail