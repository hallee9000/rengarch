import "assets/base.less"
import "./defaultLayout.less"
import Header from "./Header"
export default (props) => 
	<div className="default-layout">
		<Header {...props}/>
		{ props.children }
	</div>