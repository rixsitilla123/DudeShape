import React from 'react'
import {PopularLikeIcon, PopularMoreIcon} from '../../Assets/Images/Icon';
function PopularCard({imgUrl}) {
	return (
		<div className='shadow-[0_13px_26px_0_rgba(0,0,0,0.07)] cursor-grab'>
			<img src={imgUrl} alt="img" width={380} height={245}/>
			<div className="pt-[30px] px-[24px] pb-[26px]">
				<div className="mb-[20px] flex items-center justify-between">
					<h4 className="text-[20px] font-medium leading-[27px] text-[#242424]">White Swan Chair</h4>
					<div className="flex items-center gap-[8px]">
						<span className='w-[26px] h-[26px] block flex items-center justify-center rounded-[50%] bg-[#ECF4FF] duration-500 cursor-pointer hover:bg-[#EF5423] text-[#000] hover:text-[#fff]'><PopularLikeIcon/></span>
						<span className='w-[26px] h-[26px] block flex items-center justify-center rounded-[50%] bg-[#ECF4FF] duration-500 cursor-pointer hover:bg-[#EF5423] text-[#000] hover:text-[#fff]'><PopularMoreIcon/></span>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<strong className='text-[24px] font-medium leading-[31px] text-[#154444]'>$40</strong>
					<button className='py-[5.5px] px-[14.5px] bg-[#244D4D] text-[#fff] text-[12px] font-medium leading-[21px] duration-500 border-[1.5px] border-transparent hover:bg-[#fff] hover:text-[#244d4d] hover:border-[#244d4d]'>Buy Now</button>
				</div>
			</div>
		</div>
	)
}
export default PopularCard