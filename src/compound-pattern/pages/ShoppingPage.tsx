import {ProductCard } from "../components/ProductCard"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces"
import coffee from '../assets/coffee-mug.png'

const product : Product = {
	id: '1',
	title: 'Coffee Mug',
	img: coffee
}

const ShoppingPage = () => {
	return (
		<div>
			<h1>
				ShoppingPage
			</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	)
}

export default ShoppingPage;