import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/Product detail"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])
    return (
        <Layout>
            <div className="m-5 text-black text-lg font-bold">Home</div>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg align-middle">
            {items?.map(item => (
            <Card key={item.id} data={item}/>
            ))}
            </div>
            <ProductDetail/>
        </Layout>
    )
  }
  export default Home
  