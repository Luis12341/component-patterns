import { createContext } from "react";
import { useProduct } from "hooks";
import { ProductCardProps, ProductContextProps } from "interfaces/product.interfaces";
import styles from "styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};
