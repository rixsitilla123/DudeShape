import React from 'react';
import FurnitureItem from './FurnitureItem/FurnitureItem';
import FurnitureCardItem from './FurnitureCardItem/FurnitureCardItem';
import {FurnitureIcon1, FurnitureIcon2, FurnitureIcon3, FurnitureIcon4, FurnitureIcon5, FurnitureIcon6} from '../Assets/Images/Icon';
import FurnitureImg from '../Assets/Images/furnitureImg.jpg';
function Furniture() {
	return (
		<section className='mb-[140px]'>
			<div className="containers">
				<h2 className="mb-[20px] text-[32px] font-bold leading-[48px] text-[#242424] text-center">All Furniture</h2>
				<div className="mb-[90px] flex items-center gap-[100px] justify-center">
					<FurnitureItem title={'Room'}/>
					<FurnitureItem title={'Category'}/>
					<FurnitureItem title={'Style'}/>
				</div>
				<div className="flex items-center justify-between">
					<div className="relative">
						<span className='w-[190px] h-[85px] block absolute z-[-1] top-[-9px] left-[-12px] bg-[#154444]'></span>
						<img src={FurnitureImg} alt="furniture img" width={552} height={390}/>
						<span className='w-[190px] h-[85px] block absolute z-[-1] bottom-[-9px] right-[-12px] bg-[#154444]'></span>
					</div>
					<div className="w-[476px] flex flex-wrap items-center gap-[30px]">
						<FurnitureCardItem imgUrl={<FurnitureIcon1/>} title={'Living Room'}/>	
						<FurnitureCardItem imgUrl={<FurnitureIcon2/>} title={'Kitchen'}/>
						<FurnitureCardItem imgUrl={<FurnitureIcon3/>} title={'Dining Room'}/>
						<FurnitureCardItem imgUrl={<FurnitureIcon4/>} title={'Office'}/>
						<FurnitureCardItem imgUrl={<FurnitureIcon5/>} title={'Bed Room'}/>
						<FurnitureCardItem imgUrl={<FurnitureIcon6/>} title={'Hallway'}/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Furniture