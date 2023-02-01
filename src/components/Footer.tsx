import React from 'react';

const Footer = () => {
	return (
		<footer className="max-w-[1240px] mx-auto px-5 flex flex-col items-center">
			<div className="flex items-center gap-5 md:gap-10 mb-[35px]">
				<a href="https://facebook.com" target="_blank" rel="noreferrer">
					<img src="/images/fb.svg" alt="fb" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noreferrer">
					<img src="/images/instagram.svg" alt="instagram" />
				</a>
				<a href="https://twitter.com/chizycodes" target="_blank" rel="noreferrer">
					<img src="/images/twitter.svg" alt="twitter" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noreferrer">
					<img src="/images/youtube.svg" alt="youtube" />
				</a>
			</div>

			<div className="flex items-center gap-5 md:gap-10 mb-[35px] text-[#111827] font-medium text-xs md:text-[18px]">
				<a href="/">Conditions of Use</a>
				<a href="/">Privacy Policy</a>
				<a href="/">About US</a>
			</div>

			<p className="text-[#6B7280] text-xs md:text-[18px] font-medium pb-10">&copy; 2023 Vezeti</p>
		</footer>
	);
};

export default Footer;
