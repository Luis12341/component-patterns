import {
    ProductCard,
    ProductImage,
    ProductButtons,
    ProductTitle,
} from "components/ProductCard";
import "styles/styles.css";
import { products } from "data/products";
import { useShoppingCard } from "hooks";


export const ShoppingPage = () => {
    
    const {onProductCountChage,shoppingCart} = useShoppingCard()

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
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className='bg-dark text-white'
                        onChange={onProductCountChage}
                        value={shoppingCart[product.id]?.count}
                    >
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-white' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>
            <div className='shopping-cart'>
                {Object.keys(shoppingCart).map((key) => {
                    return (
                        <ProductCard
                            key={key}
                            product={shoppingCart[key]}
                            className='bg-dark text-white'
                            style={{
                                width: "100px",
                            }}
                            value={shoppingCart[key].count}
                            onChange={onProductCountChage}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                className='custom-buttons'
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            />
                        </ProductCard>
                    );
                })}
            </div>
        </div>
    );
};
