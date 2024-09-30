import React from 'react'

function NavbarItem({item}) {
	return (
		<li>
			<a className='text-[#161616] hover:text-[#154444] duration-500 leading-[21px] text-[16px]' href={item.path}>{item.value}</a>
		</li>
	)
}

export default NavbarItem