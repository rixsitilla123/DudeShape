import React from 'react'
import { CompaniesIcon1, CompaniesIcon2, CompaniesIcon3, CompaniesIcon4, CompaniesIcon5, CompaniesIcon6 } from '../Assets/Images/Icon'

function Companies() {
	return (
		<section className='mt-[60px] px-[12px] md:mt-[100px] lg:mt-[140px]'>
			<div className="containers">
				<h2 className="mb-[24px] text-[18px] leading-[23px] md:mb-[32px] md:text-[25px] md:leading-[32px] lg:mb-[40px] lg:text-[32px] lg:leading-[42px] font-bold text-center text-[#244D4D]">Trusted by 20,000+ companies</h2>
				<div className="flex items-center justify-around gap-[10px]">
					<CompaniesIcon1 />
					<CompaniesIcon2 />
					<CompaniesIcon3 />
					<CompaniesIcon4 />
					<CompaniesIcon5 />
					<CompaniesIcon6 />
				</div>
			</div>
		</section>
	)
}

export default Companies