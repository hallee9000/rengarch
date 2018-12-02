import React from 'react'
import classnames from 'classnames'
import "./office.less"

export default class Office extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			current: 1
		}
	}
	toggleCurrent = (i) => {
		this.setState({
			current: i
		})
	}
	render() {
		const { current } = this.state
		return (
			<div className="office">
				<div className="container">
					<ul className="office-side">
						<li onClick={e => this.toggleCurrent(1)} className={classnames({active: current===1})}>
							<div>关于礽建筑</div>
							<div>About Rengarch</div>
						</li>
						<li onClick={e => this.toggleCurrent(2)} className={classnames({active: current===2})}>
							<div>主持建筑师</div>
							<div>Chief Architect</div>
						</li>
					</ul>
					<div className="office-content">
						<ul className={classnames({'content-visible': current===1})}>
							<li>
								礽建筑是由建筑师章礽然和施新桐创始并主持的建筑设计团队，工作室成立于北京。实践范围包括城市规划、建筑设计、室内设计、景观设计、产 品设计及当代艺术创作。我们希望把生活中所感悟到的真实感带到具体的设计项目中，深刻理解项目 所处环境与设计内容的内在关联性，以此挖掘出更 多的精神内容。
							</li>
						</ul>
						<ul className={classnames({'content-visible': current===2})}>
							<li>
								<h3>章礽然</h3>
								<p>本科 中国美术学院建筑艺术学院建筑艺术系 硕士 英国伦敦大学学院巴特莱特建筑学院 (University College London，Bartlett School of Architecture)</p>
							</li>
							<li>
								<h3>施新桐</h3>
								<p>本科 湖南大学建筑学院建筑学专业 曾策划个人画展即【世界即一个瓶子】</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}