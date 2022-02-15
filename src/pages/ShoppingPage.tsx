import { ProductCard } from "components/ProductCard"

const product = {
  id: "1",
  title: "Coffe mug Card"
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: "flex",
          flexWrap: "wrap"
        }}>
        <ProductCard product={product} />
        </div>
    </div>
  )
}
