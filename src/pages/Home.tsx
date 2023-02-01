import React, { FC, useEffect, useState } from 'react';
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';
import Search from '../components/Search';
import Products from '../products.json';

interface Props {}

const Home: FC<Props> = () => {
	const [products, setProducts] = useState([...Products]);
	const [searchProducts, setSearchProducts] = useState([...products]);
	const [values, setValues] = useState({
		name: '',
		price: 0,
	});
	const [query, setQuery] = useState('');

	const addProduct = (e: any) => {
		e.preventDefault();
		setProducts([...products, { ...values, id: products.length + 1 }]);
		setValues({ name: '', price: 0 });
	};

	const removeProduct = (id: number) => {
		const newProds = products.filter((product) => product.id !== id);
		setProducts(newProds);
	};

	const handleSearch = () => {};

	useEffect(() => {
		if (query === '') {
			setProducts(searchProducts);
		} else {
			const search = products.filter((product) => {
				return product.name.toLowerCase().includes(query.toLowerCase());
			});
			setProducts(search);
		}
	}, [query]);

	return (
		<div className="mb-40 mt-10 w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center">
			<Search handleSearch={handleSearch} query={query} setQuery={setQuery} />
			<div className="flex flex-wrap justify-center gap-[40px] px-5 mt-10">
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
