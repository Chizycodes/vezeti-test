import React, { FC, useRef } from 'react';

interface Props {}

const Header: FC<Props> = () => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className="navbar bg-white py-[3rem] mx-auto flex w-full justify-between max-w-[1240px] px-3">
					<div>
						<div className="md:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<img src="/images/menu.svg" alt="menu" className="w-[34px]" />
							</label>
						</div>
						<div className="px-2 ">
							<img src="/images/logo.svg" alt="logo" className="w-[8rem] md:w-[10rem] lg:w-auto" />
						</div>
					</div>

					<div className="hidden md:block">
						<ul className="menu menu-horizontal lg:gap-[30px]">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Products</a>
							</li>

							<li>
								<a href="/">Cart</a>
							</li>

							<li>
								<a href="/">Profile</a>
							</li>
						</ul>
					</div>
					<div className="navbar-end w-auto">
						<label
							htmlFor="add-product"
							className="btn sm:px-[25px] py-[15px] outline-none normal-case border-none text-[#ffffff] grad-bg"
						>
							Add Product
						</label>
					</div>
				</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-[#ffffff]">
					<div className="flex items-center justify-between mx-3">
						<img src="/images/logo.svg" alt="logo" className="w-[8rem] md:w-[10rem] lg:w-auto" />
						<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
							<img src="/images/close.svg" alt="close" className="w-[34px]" />
						</label>
					</div>

					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Products</a>
					</li>

					<li>
						<a href="/">Cart</a>
					</li>

					<li>
						<a href="/">Profile</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
