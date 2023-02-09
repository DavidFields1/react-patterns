import {ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces"
import coffee from '../assets/coffee-mug.png'
import '../styles/custom-styles.css'

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
				<ProductCard 
					product={product}
					className="bg-dark text-white"
				>
					<ProductCard.Image className="custom-image"  />
					<ProductCard.Title className="text-bold" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard 
					product={product}
					className="bg-dark text-white"
				>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard 
					product={product}
					style={{
						backgroundColor: '#70D1F8'
					}}
				>
					<ProductImage
						style={{
							cursor: 'pointer',
							boxShadow: '5px 5px 5px rgba(0,0,0,0.3)'
						}} 
					/>
					<ProductTitle style={{
						fontWeight: 'bold',
						display: 'block',
						marginTop: '10px'
					}} />
					<ProductButtons style={{
						display: 'flex',
						justifyContent: 'flex-end'
					}} />
				</ProductCard>
			</div>
		</div>
	)
}

export default ShoppingPage;