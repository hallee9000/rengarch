import { withRouter } from 'next/router'
import Swiper from 'react-id-swiper'
import { numberToArray } from 'utils/helper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./detail.less"

const params = {
	autoplay: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	autoHeight: true,
	spaceBetween: 20,
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
	}
}

const arts = {
	'brick-seat': [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg'
	],
	'mo': [
		'1.jpg',
		'2.jpg',
		'3.jpg'
	]
}

export default withRouter((props) => {
	const artName = props.router.query.name
	const pictures = arts[artName]
	return (
		<div className="art-detail">
			<Swiper {...params} containerClass="swiper-container detail-swiper">
				{
					pictures.map(p =>
						<div key={p}>
							<img src={`/static/art/${artName}/${p}`}/>
						</div>
					)
				}
			</Swiper>
		</div>
	)
})