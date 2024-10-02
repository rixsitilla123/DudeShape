import React from 'react';
import {Logo, FooterSocialMediaIcon1, FooterSocialMediaIcon2, FooterSocialMediaIcon3, FooterSocialMediaIcon4} from '../Assets/Images/Icon';
import FooterSocialMedia from './FooterSocialMedia/FooterSocialMedia';
function Footer() {
	return (
		<footer className='bg-[#305F64]'>
			<div className="containers">
				<div className="pt-[100px] pb-[40px] flex items-center justify-between">
					<div className="w-[300px] text-left">
						<a className='text-[#fff] mb-[24px] inline-block' href="/"><Logo/></a>
						<p className='text-[18px] leading-[26px] mb-[40px] text-[#fff]'>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
						<strong className="mb-[20px] text-[20px] font-bold text-[#fff] leading-[26px]">Follow Us:</strong>
						<div className="flex items-center gap-[15px]">
							<FooterSocialMedia imgUrl={<FooterSocialMediaIcon1/>} imgWidth={6} imgHeight={13}/>
							<FooterSocialMedia imgUrl={<FooterSocialMediaIcon2/>} imgWidth={11} imgHeight={9}/>
							<FooterSocialMedia imgUrl={<FooterSocialMediaIcon3/>} imgWidth={10} imgHeight={10}/>
							<FooterSocialMedia imgUrl={<FooterSocialMediaIcon4/>} imgWidth={10} imgHeight={7}/>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<p className="text-[18px] laeding-[23px] text-center py-[20px] text-[#fff]">Copyright @ 2024. Crafted with love.</p>
		</footer>
	)
}
export default Footer