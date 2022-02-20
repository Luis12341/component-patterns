import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "hooks";
import { Product, ProductContextProps } from "interfaces/product.interfaces";
import styles from "styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
