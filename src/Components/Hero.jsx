import React from 'react'
import heroImgDesktop from '../Assets/Images/heroImgDesktop.jpg';
function Hero() {
	return (
		<section className=''>
			<div className="containers">
				<div className="flex flex-col-reverse lg:flex-row bg-[#154444]">
					<img className={`w-[411px] h-[560px] mx-auto lg:mx-0 mt-[40px] lg:mt-0`} src={heroImgDesktop} alt="hero chair img" width={411} height={560} />
					<div className="pt-[40px] pl-[20px] md:pt-[70px] md:pl-[60px] lg:pt-[101px] lg:pl-[100px]">
						<h1 className="w-full mb-[12px] text-[32px] leading-[42px] md:mb-[16px] md:text-[48px] md:leading-[48px] lg:mb-[20px] text-[#fff] lg:text-[56px] font-bold lg:leading-[68px]">We Help You Make Modern Furniture</h1>
						<div className="w-full mb-[30px] lg:w-[442px] lg:mb-[35px]">
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