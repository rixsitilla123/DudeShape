import React from 'react'
import { CustomerStarIcon } from '../Assets/Images/Icon';
import CustomersImg from '../Assets/Images/customersImg.jpg';
import CustomerAvatar from '../Assets/Images/customerAvatar.jpg';
function Customer() {
	return (
		<section className='mb-[210px]'>
			<div className="containers">
				<div className="flex items-center justify-between">
					<div className="ml-[105px] relative">
						<span className="w-[492px] h-[492px] block absolute top-0 bottom-0 left-[-105px] rounded-[50%] bg-[#244D4D] z-[-1]"></span>
						<img src={CustomersImg} alt="customer img" width={459} height={492} />
					</div>
					<div className="w-[535px]">
						<div className="text-left mb-[40px]">
							<h2 className="text-[32px] font-bold leading-[48px] mb-[20px] text-[#242424]">Our customers are very important to us</h2>
							<p className="text-[20px] leading-[27px] text-[#383738]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
						</div>
						<div className="flex items-center gap-[10px]">
							<img className='rounded-[50%]' src={CustomerAvatar} alt="avatar" width={50} height={50}/>
							<div className="">
								<h6 className='font-medium leading-[19px] mb-[6px]'>Mr Jibon</h6>
								<div className="flex items-center gap-[8px]">
									<CustomerStarIcon/>
									<p className='text-[14px] font-medium leading-[15px]'>4.8</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Customer