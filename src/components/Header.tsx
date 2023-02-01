import React, { FC } from 'react';

interface Props {
	children: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className="navbar bg-white py-[3rem] mx-auto flex w-full justify-between max-w-[1280px] px-3">
					<div>
						<div className="md:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<img src="/images/menu.svg" alt="menu" className="w-[34px]" />
							</label>
						</div>
						<div className="px-2 text-[#A02279] text-[1.5rem] font-bold">Vezeti</div>
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
				{children}
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-[#ffffff]">
					<div className="flex items-center justify-between mx-3">
						<div className="px-2 text-[#A02279] text-[1.5rem] font-bold">Vezeti</div>
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
