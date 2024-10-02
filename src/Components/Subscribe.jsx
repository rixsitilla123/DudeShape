import React from 'react';
import {SubscribeIcon} from '../Assets/Images/Icon';

function Subscribe() {
	return (
		<section className='mb-[140px]'>
			<div className="containers bg-[#F4F6F6]">
				<div className="w-[490px] pt-[68px] pb-[55px] mx-auto text-center">
					<h2 className="text-[32px] font-bold leading-[48px] mb-[20px] text-[#222]">Subscribe to get the latest news about us</h2>
					<div className="w-[420px] mx-auto mb-[40px]">
						<p className="leading-[24px] text-[#222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
					</div>
					<div className="py-[7.5px] px-[18px] flex items-center justify-between bg-[#fff]">
						<div className="flex items-center gap-[12px]">
							<SubscribeIcon/>
							<input className='outline-none text-[#BABABA] leading-[22px]' type="text" placeholder='Enter your email' autoComplete='off' required/>
						</div>
						<button className="w-[125px] py-[15px] bg-[#305F64] font-medium text-[#fff] leading-[22px] text-center border-[2px] border-transparent duration-500 hover:border-[#305F64] hover:text-[#305F64] hover:bg-white hover:rounded-[12px]">Register</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Subscribe