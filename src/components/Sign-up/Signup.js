import React, {useEffect, useState} from 'react'
import "../../style.css";
import Workbook from "./img/managing-cholesterol-made-easy-workbook1.png";
import "./Signup.css";
import axios from 'axios'
import parse from 'html-react-parser'

const Signup = ({submitForm}) => {
	
	const [signuptopcontent, setSignuptopcontent] = useState('');
	const [signupbottomcontent, setSignupbottomcontent] = useState('');
	useEffect(() => {
		axios
		.get("http://d9312.localhost/webform_rest/cvd_signup/fields")
		.then((res) => {
			console.log(res.data.form_heading);
			Object.keys(res.data.form_heading).forEach(function(key){
				if(key == '#text')
				{
					setSignuptopcontent(res.data.form_heading[key]);
					console.log('\n');
				}
			});
			Object.keys(res.data.form_bottom).forEach(function(key){
				if(key == '#text')
				{
					setSignupbottomcontent(res.data.form_bottom[key]);
					console.log('\n');
				}
			});
		});
		

	}, []);

	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
    const [renteremail, setRenteremail] = useState('')
	const [TnC10, setTnC10] = useState(false)
	const [TnC1, setTnC1] = useState(false)
	const [TnC2, setTnC2] = useState(false)
	const [TnC3, setTnC3] = useState(false)
	const [TnC4, setTnC4] = useState(false)
	const [TnC5, setTnC5] = useState(false)
	const [TnC6, setTnC6] = useState(false)
	const [TnC7, setTnC7] = useState(false)
	const [TnC8, setTnC8] = useState(false)
	const [TnC9, setTnC9] = useState(false)
    console.log({ email, renteremail, fname, lname, TnC10,TnC1,TnC2,TnC3,TnC4,TnC5,TnC6,TnC7,TnC8,TnC9})

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleRenteremail = (e) => {
        setRenteremail(e.target.value)
    }
	const handleFname = (e) => {
        setFname(e.target.value)
    }
	const handleLname = (e) => {
        setLname(e.target.value)
    }
	const handleChange10 = (e) => {
        setTnC10(e.target.checked)
    }
	const handleChange1 = (e) => {
        setTnC1(e.target.checked)
    }
	const handleChange2 = (e) => {
        setTnC2(e.target.checked)
    }
	const handleChange3 = (e) => {
        setTnC3(e.target.checked)
    }
	const handleChange4 = (e) => {
        setTnC4(e.target.checked)
    }
	const handleChange5 = (e) => {
        setTnC5(e.target.checked)
    }
	const handleChange6 = (e) => {
        setTnC6(e.target.checked)
    }
	const handleChange7 = (e) => {
        setTnC7(e.target.checked)
    }
	const handleChange8 = (e) => {
        setTnC8(e.target.checked)
    }
	const handleChange9 = (e) => {
        setTnC9(e.target.checked)
    }

    const handleApi = () => {
        console.log({ email, renteremail, fname, lname, TnC10,TnC1,TnC2,TnC3,TnC4,TnC5,TnC6,TnC7,TnC8,TnC9 })
        let check1 =[];
		let check2 =[];
		if (TnC1 == true)
		{
			check1.push ("atherosclerotic cardiovascular disease")
		}
		if (TnC2 == true)
		{
			check1.push ("high bad cholesterol")
		}
		if (TnC3 == true)
		{
			check1.push ("someone with ASCVD")
		}
		if (TnC4 == true)
		{
			check1.push ("health care provider")
		}
		if (TnC5 == true)
		{
			check2.push ("eat healthy with CVD")
		}
		if (TnC6 == true)
		{
			check2.push ("moving and be active")
		}
		if (TnC7 == true)
		{
			check2.push ("discussions with your health care provider")
		}
		if (TnC8 == true)
		{
			check2.push ("CVD essentials")
		}
		if (TnC9 == true)
		{
			check2.push ("Personal stories")
		}
		if (TnC10 == true)
		{
			check2.push ("support someone with CVD")
		}
		
		console.log(check1 , check2);
		
		axios.post ('http://d9312.localhost/webform_rest/submit/?_format=json',{
         	
			webform_id: "cvd_signup",
			first_name: fname,
			last_name: lname,
			email_address: email,
			re_enter_email_address: renteremail,
			best_describes_you: check1,
			information_would_you_benefit_from_most: check2
	
        })
        .then(result=> {
            console.log (result.data)
            alert("Thank you for submitting the request.")
			setFname('')
			setLname('')
			setEmail('')
			setRenteremail('')
			setTnC1(false)
			setTnC2(false)
			setTnC3(false)
			setTnC4(false)
			setTnC5(false)
			setTnC6(false)
			setTnC7(false)
			setTnC8(false)
			setTnC9(false)
			setTnC10(false)
        })
        .catch(error=> {
            console.log (error)
            alert("There is an error.Please try again...")
        })
    }
    return (
    <div id="globalMainContainer">
            <div id="articleContainer">
                <div id="articleBody">
                    <div className="innerBodyContainer pt-70 pt-m-45 pb-100 pb-m-50">

					{parse(signuptopcontent)}

					<form action="Register" id="Register" className="inputForm">
						<p className="unAuthMsg d-none text-red jost-bold pb-20">Our records indicate that you have already registered for the program.</p>
						<div id="token_container"></div>
						
						<p className="jost-bold display5 text-darkblue">
							<span className="hanging jost-bold display5">*</span>Required.
						</p>
					
					
						<div className="mt-30 mt-m-20">
					   		<div className="floatLeft w-48 w-m-100 inputcontent">
				               	<p className="mb-25"><label htmlFor="fname" className="jost-bold text-darkblue">First name*</label></p>
				               	<input type="text" value ={fname} onChange = {handleFname} placeholder="First name" name="fname" id="fname" className="form-control input-field w-100 jost-bold" />
				            </div>
						    <div className="floatRight w-48 w-m-100  mt-m-20 inputcontent">
				               <p className="mb-25"> <label htmlFor="lname" className="jost-bold text-darkblue">Last name*</label></p>
				                <input type="text" value ={lname} onChange = {handleLname} placeholder="Last name" name="lname" id="lname"  className="form-control input-field w-100 jost-bold" />
				            </div>
				            <div className="clear"></div>
					    </div>
						<div className="mt-30 mt-m-20">
					   		<div className="floatLeft w-48 w-m-100 inputcontent">
				               	<p className="mb-25"><label htmlFor="email" className="jost-bold text-darkblue">Email address*</label></p>
				               	<input type="text" value ={email} onChange = {handleEmail} placeholder="Email" name="email" id="email" className="form-control input-field w-100 jost-bold" />
				            </div>
						    <div className="floatRight w-48 w-m-100  mt-m-20 inputcontent">
				                <p className="mb-25"><label htmlFor="emailConfirm" className="jost-bold text-darkblue">Re-enter email address*</label></p>
				                <input type="text" value ={renteremail} onChange = {handleRenteremail} placeholder="Re-enter email" name="emailConfirm" id="emailConfirm" className="form-control input-field w-100 jost-bold" />
				            </div>
				            <div className="clear"></div>
					    </div>
						
						
						<div className="check-option inputcontent mt-50 mt-m-40 check-option1">
					    	<p className="jost-bold pb-15 text-darkblue">
					    		Which of the following statements best describes you? (check all that apply)*
					    	</p>
					    	<div className="check_content">
							    <div className="container relative checkBox">
									<input onChange = {handleChange10} value ={TnC10} type="checkbox" name="self_description1" id="self_description1" />
									<span className="checkBox-p pl-10">I have been diagnosed with atherosclerotic cardiovascular disease (ASCVD) by my doctor</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange1} value ={TnC1} type="checkbox" name="self_description2" id="self_description2"   />
									<span className="checkBox-p pl-10">diagonised with high LDL cholestrol" value="I have been diagnosed with high bad cholesterol (LDL-C) by my doctor</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange2} value ={TnC3} type="checkbox" name="self_description3" id="self_description3"   />
									<span className="checkBox-p pl-10">I have someone in my life with ASCVD and/or high bad cholesterol (LDL-C)</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange3} value ={TnC3} type="checkbox" name="self_description4" id="self_description4"  />
									<span className="checkBox-p pl-10">I am a health care provider who cares for people with ASCVD and/or high bad cholesterol (LDL-C)</span>
                                    <div className="clear"></div>
								</div>
							</div>
							<p className="text-red d-none checkErrorMsg">This field is required</p>
						</div>
						
						<div className="check-option inputcontent mt-50 mt-m-40">
					    	<p className="jost-bold pb-15 text-darkblue">
					    		Which type of content/information would you benefit from most/like to receive? (check all that apply)
					    	</p>
					    	<div className="check_content">
							    <div className="container relative checkBox">
									<input onChange = {handleChange4} value ={TnC4} type="checkbox" name="benefit_type1" id="benefit_type1"   />
									<span className="checkBox-p pl-10">Better ways to eat healthy with CVD</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange5} value ={TnC5} type="checkbox" name="benefit_type2" id="benefit_type2" />
									<span className="checkBox-p pl-10">How to get moving and be active on your terms</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange6} value ={TnC6} type="checkbox" name="benefit_type3" id="benefit_type3"  />
									<span className="checkBox-p pl-10">How to have better discussions with your health care provider</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange7} value ={TnC7} type="checkbox" name="benefit_type4" id="benefit_type4"   />
									<span className="checkBox-p pl-10">CVD essentials-important things to know</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange8} value ={TnC8} type="checkbox" name="benefit_type5" id="benefit_type5"   />
									<span className="checkBox-p pl-10">Personal stories from others fighting CVD</span>
                                    <div className="clear"></div>
								</div>
								<div className="container relative checkBox">
									<input onChange = {handleChange9} value ={TnC9} type="checkbox" name="benefit_type6" id="benefit_type6"   />
									<span className="checkBox-p pl-10">Ways to support someone with CVD/high LDL-C</span>
                                    <div className="clear"></div>
								</div>
							</div>
						</div>

						{parse(signupbottomcontent)}
					
					    <div className="mt-50 mt-m-40 text-center">
					    	<button type="button" onClick ={handleApi} id="btnSubmit" title="Sign Up"><a href="#"  className="btn plr-50 btnSubmit d-inline-block">
					    		Submit
					    	</a></button>
						</div>
					</form>
											  
				</div>
			</div>
		</div>	
	</div>
    );
};

export default Signup;