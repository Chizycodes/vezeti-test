import React, { FC, useEffect, useState } from 'react';
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';
import Products from '../products.json';

interface Props {}

const Home: FC<Props> = () => {
	const [products, setProducts] = useState([...Products]);
	const [values, setValues] = useState({
		name: '',
		price: '',
	});

	const addProduct = (e: any) => {
		e.preventDefault();
		Products.push({ ...values, id: products.length + 1 });
	};

	const removeProduct = (id: number) => {
		const newProds = Products.filter((product) => product.id !== id);
		Products.push()

		console.log(id);
	};

	return (
		<div className="mb-40 mt-10 w-full max-w-[1240px] mx-auto flex justify-center items-center">
			<div className="flex flex-wrap justify-center gap-[40px] px-5">
				{products?.map((product, i) => {
					return (
						<div key={i}>
							<Product product={product} deleteProduct={removeProduct} />
						</div>
					);
				})}
			</div>
			<ProductModal values={values} setValues={setValues} addProduct={addProduct} />
		</div>
	);
};

export default Home;
