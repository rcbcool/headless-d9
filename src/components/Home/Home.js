import React, {useEffect, useState} from 'react'
import "../../style.css";
// import HomeBanner from "../../sites/default/files/images/banner_home.jpg";
// import Thirtyseven from "../../sites/default/files/images/37-sec-graphic.png" 
import axios from 'axios'
import parse from 'html-react-parser'

function Home(){
const [content, setContent] = useState('');

useEffect(() => {
    axios
	.get("http://d9312.localhost/api/all-pages")
	.then((res) => {
		let htmlContent = '';
		for (let i = 0; i < res.data.length; i++) {
          htmlContent += res.data[i].body;
        }
		setContent(htmlContent);
	});
});

	return (
		<div id="articleContainer">
		{parse(content)}
		</div>
	);
}
export default Home;