import React from 'react'

function FurnitureCardItem({imgUrl, title}) {
	return (
		<div className='w-[222px] border-[#D9DCE5] border-[2px] py-[15px] text-[#666] text-center duration-500 cursor-pointer hover:bg-[#154444] hover:border-[#154444] hover:text-[#fff]'>
			<img className='' src={imgUrl} alt="icon" width={24} height={24}/>
			<h5 className="mt-[14px] font-medium leading-[21px]">{title}</h5>
		</div>
	)
}

export default FurnitureCardItem