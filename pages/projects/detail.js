import { withRouter } from 'next/router'
import Swiper from 'react-id-swiper'
import { numberToArray } from 'utils/helper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./detail.less"

const params = {
	autoplay: true,
	autoHeight: true,
	slidesPerView: 2,
	centeredSlides: true,
	mousewheel: {
		sensitivity: 2
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	spaceBetween: 20
}

const projects = {
	'bonus': [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'4.1.jpg',
		'4.2.jpg',
		'4.3.jpg',
		'4.4.jpg',
		'4.5.jpg',
		'4.6.jpg',
		'4.7.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.jpg',
		'9.jpg',
		'10.jpg',
		'11.gif',
		'12.gif'
	],
	'xiaoyin': [
		'4.jpg',
		'9.jpg',
		'7.jpg',
		'8.jpg',
		'6.jpg',
		'5.jpg',
		'3.jpg',
		'2.jpg',
		'1.jpg',
		'10.jpg',
		'11.jpg',
		'12.jpg',
		'13.jpg'
	],
	'silk-road': [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
	],
	'red': [
		'0.jpg',
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.jpg',
		'9.jpg',
		'10.jpg',
		'11.jpg'
	],
}

export default withRouter((props) => {
	const projectName = props.router.query.name
	const pictures = projects[projectName]
	return (
		<div className="project-detail">
			<Swiper {...params} containerClass="swiper-container detail-swiper">
				{
					pictures.map(p =>
						<div key={p}>
							<img src={`/static/projects/${projectName}/${p}`}/>
						</div>
					)
				}
			</Swiper>
		</div>
	)
})