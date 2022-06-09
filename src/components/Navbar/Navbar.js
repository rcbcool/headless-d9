import React, {useEffect, useState} from 'react'
import "../../style.css";
import "./Navbar.css";
// import { Link } from "react-scroll";
import logo from "../../sites/default/files/images/global/Fight-CVD-logo.png";
import axios from 'axios'
import parse from 'html-react-parser'
import { Link } from 'react-scroll';
// import { Link } from "react-router-dom";

function Navbar(){

	const [menuitems, setMenuitems] = useState('');
	const [menuitemsnextpage, setMenuitemsnextpage] = useState('');
	useEffect(() => {
		let mounted = true;
		axios
		.get("http://d9312.localhost/api/menu_items/main")
		.then((res) => {
			let arrResult = []
			let arrNextPageResult = []
			for (let i = 0; i < res.data.length; i++) {
				if(res.data[i].relative && res.data[i].relative != "" && res.data[i].alias != "") {
					arrNextPageResult.push({'title': res.data[i].title, 'alias': res.data[i].alias, 'uri': res.data[i].uri, 'relative': res.data[i].relative});
				}
				else
				{
					if( res.data[i].key === 'standard.front_page') {
						arrResult.push({'title': res.data[i].title, 'description': 'articleHead'});
					} else {
						arrResult.push({'title': res.data[i].title, 'description': (res.data[i].description != null ? res.data[i].description: res.data[i].title)});
					}
				}
			}
			if(mounted) {
				setMenuitems(arrResult);
				setMenuitemsnextpage(arrNextPageResult);
			}
			/*
			let htmlMenu = '<ul style={{ listStyleType: "none" }}>';
			for (let i = 0; i < res.data.length; i++) {
				if(res.data[i].alias &&  res.data[i].alias == 'signup') {
					htmlMenu += '<li><a class="btn-signup jost-bold" style="width: 50px;">' + res.data[i].title + '</a></li>';
				} else {
					// htmlMenu += '<li><a>' + res.data[i].title + '</a></li>';
					htmlMenu += <HashLink smooth to="/#">res.data[i].title</HashLink>;
				}		
			}
			htmlMenu += '</ul>';
			setMenuitems(htmlMenu);
			*/
		});
		return () => mounted = false;

	}, []);

  return (
    <header className="header">
	
      <div className="bg-darkblue">
      <div className="headerBodyContainer">
      <div className="n-wrapper" id="Navbar">
      {/* left */}
      
        <div className="n-left">
        <a className="display0 menuLogo" href="">
			<img className="display0" src={logo} alt="Fight CVD" />
		</a>
        {/* <Toggle /> */}
        </div>
			{/* right */}
			<div className="n-right">
				<div className="n-list">
					<ul style={{ listStyleType: "none" }}>
					{menuitems && menuitems.map((item, index) => (
						<li><Link activeClass="active" duration={1000} smooth={true} offset={-10} to={menuitems[index].description} key={index}>{parse(menuitems[index].title)}</Link></li>
					))}
					{menuitemsnextpage && menuitemsnextpage.map((item, index) => (
						<li className="lastItem h"><a href={menuitemsnextpage[index].relative} id={menuitemsnextpage[index].alias} key={index}>{parse(menuitemsnextpage[index].title)}</a></li>
					))}
					{/*parse(menuitems)*/}
					</ul>
				</div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Navbar;
