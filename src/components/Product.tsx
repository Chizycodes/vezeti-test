import React, { FC } from 'react';

interface Props {
	product: any;
	deleteProduct: any;
}

const Product: FC<Props> = ({ product, deleteProduct }) => {
	return (
		<div
			style={{ background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)' }}
			className="p-4 rounded-[15px] border border-[#D7D7D7] w-[280px] cursor-pointer hover:shadow-md relative"
		>
			<div className="absolute top-0 right-3 p-[2px] hover:border" onClick={() => deleteProduct(product.id)}>
				<img src="/images/delete.svg" className="w-8" alt="delete" />
			</div>
			<div className="mb-4 w-full h-[220px]">
				<img src="/images/cart.jpeg" alt="product" className="h-full w-full" />
			</div>

			<div className="text-[12px]">
				<div className="flex justify-between mb-2 text-sm">
					<p className="font-bold ">{product?.name}</p>
					<p>₦{product?.price.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
