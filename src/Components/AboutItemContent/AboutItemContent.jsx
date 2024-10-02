import React from 'react'
function AboutItemContent({imgUrl, title}) {
	return (
		<div className='gap-[18px] md:gap-[24px] lg:gap-[30px] flex items-start md:justify-center'>
			<img src={imgUrl} alt="icon" width={50} height={50}/>
			<div className="">
				<h4 className="mb-[5px] text-[14px] font-semibold leading-[20px] md:mb-[10px] md:text-[17px] md:font-bold md:leading-[23px] lg:mb-[15px] lg:text-[20px] lg:leading-[26px] text-[#244D4D]">{title}</h4>
				<p className="w-[150px] text-[10px] leading-[15px] md:w-[227px] md:text-[14px] md:leading-[20px] lg:w-[306px] lg:text-[18px] lg:leading-[26px] text-[#383738]">All of our furniture uses the best materials and choices</p>
			</div>
		</div>
	)
}
export default AboutItemContent