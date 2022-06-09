import React from 'react'
import "../../style.css";
import Workbook1 from "../../img/managing-cholesterol-made-easy-workbook.png";

const Thankyou = () => {
  return (
    <div id="globalMainContainer">
		<div id="articleContainer">
			<div id="articleBody">
				<div class="smallBodyContainer pt-70 pt-m-45 text-center m-text-left pb-100 pb-m-70">
					<h3 class="karnakpro-black text-darkblue display2 m-display3">Thank you</h3>
					<div class="verticalSeperator bg-orange"></div>
					
					<p class="pb-25">
						Thank you for signing up! Below, you can download worksheets from our <em>Managing Cholesterol Made 
						Easy</em> workbook to help you stay on track with healthy eating, exercise, and overall wellness. 
					</p>
					<p class="pb-60 pb-m-50">
						Look out periodically for additional emails with more information and worksheets. Add 
						<a class="text-orange underline" href="mailto:consumer@info.novartis.com">consumer@info.novartis.com</a> 
						to your contacts so we don't go to your spam folder. 
					</p>
					
					<div class="text-center">
						<img class="pb-50 pb-m-40 w-m-75" src={Workbook1} alt="Managing Cholesterol Made Easy workbook" />
						<br />
						
						<a class="btn d-inline-block" title="Download Now" target="_blank" 
							href="https://digistore.widen.net/s/zvlwmtp9fm/146446-xin-crm-incentive-worksheets-1-4-8.21">
							Download Now 
						</a>
					</div>
				</div>	
			</div>
			<div class="clear"></div>	
		</div>
	</div>
  )
}

export default Thankyou