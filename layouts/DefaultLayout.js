import Head from 'next/head'
import "assets/base.less"
import "./defaultLayout.less"
import Header from "components/Header"

export default (props) => 
	<div className="default-layout">
		<Head>
			<title>礽建筑</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header {...props}/>
		{ props.children }
	</div>