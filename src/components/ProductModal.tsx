import React, { FC } from 'react';

interface Props {}

const ProductModal: FC<Props> = () => {
	const addProduct = (e: any) => {
		e.preventDefault();
		console.log('add product');
	};
	return (
		<>
			<input type="checkbox" id="add-product" className="modal-toggle" />
			<label htmlFor="connect-wallet" className="modal  cursor-pointer">
				<label className="modal-box relative bg-[#ffffff] p-0">
					<div className="border-b border-[#CFD8DC] px-[32px] py-[20px] flex items-center justify-between">
						<h4 className="font-bold text-[24px] text-[#333333]">Add Product</h4>
						<label htmlFor="add-product" className="btn btn-sm border-none bg-[#ffffff] hover:bg-[#ffffff] p-0">
							<img src="/images/x.svg" alt="close" />
						</label>
					</div>

					<div className="p-[32px] text-[#333333]">
						<h5>Enter product name and price</h5>

						<div className="mt-4">
							<form onSubmit={addProduct}>
								<div className="mb-[1rem]">
									<input type="text" placeholder="Product Name" className="v-input" />
								</div>

								<div className="mb-[2rem]">
									<input type="number" placeholder="Price (NGN)" className="v-input" />
								</div>

								<button type="submit" className="v-btn w-full">
									Add
								</button>
							</form>
						</div>
					</div>
				</label>
			</label>
		</>
	);
};

export default ProductModal;
