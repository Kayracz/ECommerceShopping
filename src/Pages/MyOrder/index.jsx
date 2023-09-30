import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout"

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            My Order

            <div className="flex flex-col w-80 mt-5">
            {context.order?.slice(-1)[0].products.map(product => (
                <OrderCard
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                />
            ))}
          </div>
        </Layout>
    )
  }
  export default MyOrder
  