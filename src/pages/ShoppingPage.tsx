import { ProductCard } from "components/ProductCard"

const product = {
  id: "1",
  title: "Coffe mug Card",
  img: "/coffee-mug.png"
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
        <ProductCard product={product} >
          <ProductCard.Image img={product.img} />
        </ProductCard>
        </div>
    </div>
  )
}
