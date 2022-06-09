import React from "react";
import "../../style.css";
//import "./Footer.css";
import Nlogo from "../../sites/default/files/images/global/Novartis_logo.png";

const Footer = () => {
    return (
 <footer id="footer" className="footer-bg">
	<div className="pt-50 pt-m-20 pb-50 pb-ipad-55">
		<div className="innerBodyContainer">
			<div className="pt-40 pb-50">
				<a href="https://www.novartis.us/about-us" target="_blank" rel="noopener noreferrer">
					<img className="" src={Nlogo} alt="Novartis logo" />
				</a>
			</div>
			<p className="pt-10 pl-45 pt-m-0">
				Use of this website is governed by the 
				<a href="https://www.novartis.us/terms-use" target="_blank" className="underline m-inline-block" rel="noopener noreferrer">Terms of Use</a> 
				and 
				<a href="https://www.novartis.us/privacy-policy-2" target="_blank" className="underline m-inline-block" rel="noopener noreferrer">Privacy Statement</a>.
			</p>
			<div className="pb-40">
				<div className="w-auto floatLeft">
					<p className="text-center m-text-left pl-45">
						Copyright &copy; 2021 
						<a href="https://www.novartis.us/about-us" target="_blank" className="underline" rel="noopener noreferrer">
							Novartis Pharmaceuticals Corporation</a>. 
						All rights reserved.
					</p>
				</div>
				<div className="w-auto floatRight m-floatLeft pl-m-45">
					<p className="d-inline pt-30 text-center">
						8/21 
					</p>
					<p className="d-inline text-center pb-50 pl-50 pl-m-30">
						139929
					</p>
				</div>
				<div className="clear"></div>
			</div>
		</div>	
	</div>
</footer> 
);
};

export default Footer;
