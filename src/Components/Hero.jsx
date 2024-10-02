import React from 'react'
import heroImgDesktop from '../Assets/Images/heroImgDesktop.jpg';
function Hero() {
	return (
		<section className=''>
			<div className="containers">
				<div className="flex flex-col-reverse lg:flex-row bg-[#154444]">
					<img className={`hidden md:block md:w-[411px] md:h-[560px] md:mx-auto md:mt-[40px] lg:mx-0 lg:mt-0`} src={heroImgDesktop} alt="hero chair img" width={411} height={560} />
					<img className={`w-[309px] h-[326px] mx-auto mt-[40px] px-[35px] md:hidden`} src={heroImgDesktop} alt="hero chair img" width={309} height={326} />
					<div className="pt-[40px] px-[20px] md:pt-[70px] md:pl-[60px] lg:pt-[101px] lg:pl-[100px]">
						<h1 className="w-[85%] mb-[12px] text-[32px] leading-[42px] md:mb-[16px] md:text-[48px] md:leading-[48px] lg:mb-[20px] text-[#fff] lg:text-[56px] font-bold lg:leading-[68px]">We Help You Make Modern Furniture</h1>
						<div className="w-[75%] mb-[30px]  lg:w-[442px] lg:mb-[35px]">
							<p className="text-[12px] leading-[17px] md:text-[16px] md:leading-[21px] lg:text-[20px] lg:leading-[25px] text-[#fff]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials</p>
						</div>
						<button className="w-[149px] text-[14px] leading-[20px] md:w-[160px] md:text-[17px] md:leading-[22px] lg:w-[172px] lg:text-[20px] lg:leading-[25px] py-[15.5px] duration-500 border-[2px] border-transparent bg-[#fff] text-[#154444] hover:text-[#fff] hover:border-[#fff] hover:bg-[#154444]">Explore More</button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero