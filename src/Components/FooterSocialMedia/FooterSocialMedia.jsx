import React from 'react'

function FooterSocialMedia({imgUrl, imgWidth, imgHeight}) {
	return (
		<span className='w-[20px] h-[20px] inline-block rounded-[50%] text-center bg-[#fff]'>
			<img src={imgUrl} alt="icon" width={imgWidth} height={imgHeight}/>
		</span>
	)
}

export default FooterSocialMedia