import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    const imgToUse = (img || product.img) || noImg;
    return (
        <img 
            src={ imgToUse } 
            alt='Product Image' 
            className={`${styles.productImg} ${className}`}
            style={ style }
        />
    )
}