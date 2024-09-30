import React from 'react'
import AboutItemContent from './AboutItemContent/AboutItemContent';
import aboutImg from '../Assets/Images/aboutImg.jpg';
import { AboutIcon1, AboutIcon2, AboutIcon3 } from '../Assets/Images/Icon';
function About() {
	return (
		<section className='mt-[100px] md:mt-[120px] lg:mt-[140px] mb-[140px]'>
			<div className="containers">
				<div className="flex flex-col-reverse gap-[50px] xl:flex-row items-center justify-between">
					<div className="relative">
						<img src={aboutImg} alt="about img" width={596} height={577} />
						<span className='w-[352px] h-[326px] top-[15px] md:w-[491px] md:h-[456px] top=[20px] lg:w-[630px] lg:h-[587px] bg-[#DEE4E2] lg:top-[25px] absolute z-[-1]'></span>
					</div>
					<div className="">
						<h2 className="mb-[12px] text-[24px] font-semibold leading-[40px] md:mb-[16px] md:text-[32px] md:font-bold text-[#244D4D] text-left">About Us</h2>
						<p className="w-full mb-[30px] text-[12px] leading-[19px] md:mb-[35px] md:text-[16px] md:leading-[22px] lg:w-[436px] lg:mb-[40px] lg:text-[20px] lg:leading-[25px] text-[#444444]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
						<div className="space-y-[20px] md:space-y-[25px] lg:space-y-[30px]">
							<AboutItemContent img={`${<AboutIcon1/>}`} title={'Best Quality'}/>
							<AboutItemContent img={`${<AboutIcon2/>}`} title={'100% Secure'}/>
							<AboutItemContent img={`${<AboutIcon3/>}`} title={'Free Shipping'}/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About