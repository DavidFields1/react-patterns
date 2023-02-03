import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHocProps } from '../interfaces/index';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHOC, {
	Image: ProductImage,
	Title: ProductTitle,
	Buttons: ProductButtons,
});
