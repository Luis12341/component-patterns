import {
    ProductCard,
    ProductImage,
    ProductButtons,
    ProductTitle,
} from "components/ProductCard";
import "styles/styles.css";

const product = {
    id: "1",
    title: "Coffe mug Card",
    img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <ProductCard product={product} className='bg-dark'>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard product={product} className='bg-dark text-white'>
                    <ProductImage className='custom-image' />
                    <ProductTitle title='Hola' className='text-white' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard product={product} style={{
                  background: "#ccc"
                }}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};
