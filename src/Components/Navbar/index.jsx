import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const activeStyle =  "underline underline-offset-4"
  const context = useContext(ShoppingCartContext)

   return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light"> 
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/" className={({isActive}) => isActive? activeStyle : undefined}>
                Shopi
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({isActive}) => isActive? activeStyle : undefined}>
                All
            </NavLink>
          </li>
          <li>
            <NavLink to="/clothes" className={({isActive}) => isActive? activeStyle : undefined}>
                Clothes
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" className={({isActive}) => isActive? activeStyle : undefined}>
                Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to="/furnitures" className={({isActive}) => isActive? activeStyle : undefined}>
                Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink to="/toys" className={({isActive}) => isActive? activeStyle : undefined}>
                Toys
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({isActive}) => isActive? activeStyle : undefined}>
                Orders
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="text-black/60">
            kayracz@gmail.com
          </li>
          <li>
            <NavLink to="/my-orders" className={({isActive}) => isActive? activeStyle : undefined}>
               My orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-account" className={({isActive}) => isActive? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-in" className={({isActive}) => isActive? activeStyle : undefined}>
                Sign in
            </NavLink>
          </li>
          <li className='flex justify-between items-center'>
          <ShoppingBagIcon className='h-4 w-4 text-black mx-1'></ShoppingBagIcon> {context.count}
          </li>
        </ul>
    </nav>
   )
}

export default Navbar