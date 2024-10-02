import React from 'react'

function FurnitureItem({title}) {
	return (
		<div className=' cursor-pointer furnitureItem'>
			<h4 className="text-[24px] text-[#919090] leading-[27px] mb-[5px] duration-500 ">Shop by {title}</h4>
			<span className="w-[58px] h-[2px] bg-transparent block mx-auto duration-500"></span>
		</div>
	)
}

export default FurnitureItem