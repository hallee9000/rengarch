import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./projects.less"

const params = {
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	spaceBetween: 30
}

export default () =>
	<div className="projects">
		<Swiper {...params} containerClass="swiper-container projects-swiper">
			<div>
				<img src="/static/projects/project-1.png"/>
			</div>
			<div>
				<img src="/static/projects/project-2.png"/>
			</div>
			<div>
				<img src="/static/projects/project-3.png"/>
			</div>
		</Swiper>
	</div>