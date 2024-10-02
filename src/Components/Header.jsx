import React from 'react';
import { Logo, SearchIcon, HamburgerIconDesktop, HamburgerIconMobile,  } from '../Assets/Images/Icon';
import NavbarItem from './NavbarItem/NavbarItem';
function Header() {
	const navbarList = [
		{
			id: 1,
			value: 'Home',
			path: '#'
		},
		{
			id: 2,
			value: 'About',
			path: '#'
		},
		{
			id: 3,
			value: 'Features',
			path: '#'
		},
		{
			id: 4,
			value: 'Contact',
			path: '#'
		}
	]
	return (
		<header className='my-[40px] sm:my-0 sm:mt-[44px] sm:mb-[26px]'>
			<div className="containers">
				<div className="flex items-center justify-between">
					<a href="/" className="inline-block text-[#244D4D]"><Logo/></a>
					<ul className='hidden md:flex items-center gap-[75px]'>{navbarList.map(item => <NavbarItem key={item.id} item={item}/>)}</ul>
					<div className="flex items-center gap-[32px]">
						<button className='hidden sm:block'><SearchIcon/></button>
						<button className='hidden sm:block'><HamburgerIconDesktop/></button>
						<button className="sm:hidden"><HamburgerIconMobile/></button>
					</div>
				</div> 
			</div>
		</header>
	)
}
export default Header