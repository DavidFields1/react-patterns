import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
    const imgToUse = (img || product.img) || noImg;
    return (
        <img src={ imgToUse } alt='Product Image' className={ styles.productImg } />
    )
}