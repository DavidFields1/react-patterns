import { ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseCounter: (value?: number) => void;
	product: Product;
}

export interface ProductCardHocProps {
	({ product, children }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
