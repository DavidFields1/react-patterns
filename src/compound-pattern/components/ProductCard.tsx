import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces';
import { ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseCounter } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseCounter,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={ style } >
                { children }
            </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

