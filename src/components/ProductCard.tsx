import { ReactElement } from "react";
import styles from "styles/styles.module.css";
import noImage from "assets/no-image.jpg";
import { useProduct } from "hooks";

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}
interface Product {
    id: string;
    title: string;
    img?: string;
}

interface ProductButtonsProps{
    increaseBy: (value: number) => void
    counter: Number
}

export const ProductImage = ({ img = "" }) => (
    <img
        className={styles.productImg}
        src={img ? img : noImage}
        alt='coffe mod'
    />
);

export const ProductTitle = ({ title }: { title: string }) => (
    <span className={styles.productDescription}>{title}</span>
);

export const ProductButtons = ({increaseBy, counter}: ProductButtonsProps) => (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
            +
        </button>
    </div>
);

export const ProductCard = ({ product, children }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        </div>
    );
};

ProductCard.Title =  ProductTitle
ProductCard.Image =  ProductImage
ProductCard.Buttons =  ProductButtons