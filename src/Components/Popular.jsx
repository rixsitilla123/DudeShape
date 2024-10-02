import React from 'react'
import {PopularArrowLeftIcon, PopularArrowRightIcon} from '../Assets/Images/Icon';
import PopularCard from './PopularCard/PopularCard';
import popularImg1 from '../Assets/Images/popularImg1.jpg';
import popularImg2 from '../Assets/Images/popularImg2.jpg';
import popularImg3 from '../Assets/Images/popularImg3.jpg';
function Popular() {
	return (
		<section className='mb-[140px]'>
			<div className="containers">
				<h2 className="mb-[20px] text-[32px] font-bold leading-[52px] text-left text-[#242424]">Our Popular Furniture</h2>
				<div className="mb-[80px] flex items-center justify-between">
					<div className="w-[727px]">
						<p className="text-[20px] leading-[27px] text-[#383738]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
					</div>
					<div className="flex items-center gap-[16px]">
						<span className="w-[40px] h-[40px] rounded-[50%] bg-[#F4F6F6] inline-block flex items-center justify-center cursor-pointer text-[#D1CECE] duration-500 hover:text-[#666]"><PopularArrowLeftIcon/></span> 
						<span className="w-[40px] h-[40px] rounded-[50%] bg-[#F4F6F6] inline-block flex items-center justify-center cursor-pointer text-[#D1CECE] duration-500 hover:text-[#666]"><PopularArrowRightIcon/></span> 
					</div>
				</div>
				<div className='flex items-center gap-[30px]'>
					<PopularCard imgUrl={popularImg1}/>
					<PopularCard imgUrl={popularImg2}/>
					<PopularCard imgUrl={popularImg3}/>
				</div>
			</div>
		</section>
	)
}
export default Popular