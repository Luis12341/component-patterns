import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from "styles/styles.module.css";
import noImage from "assets/no-image.jpg";

interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties
}

export const ProductImage = ({ img = "", className = "",style }: Props) => {
    const { product } = useContext(productContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            alt='coffe mod'
            style={style}
        />
    );
};
