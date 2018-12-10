import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./home.less"

const params = {
	autoplay: {
		delay: 4200
	},
	speed: 500,
	loop: true,
	mousewheel: {
		sensitivity: 2
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	spaceBetween: 10
}

const pictures = [{
	src: '/static/bonus.jpg',
	title: 'BONUS 空间设计',
	subtitle: '中国西安.2018'
}, {
	src: '/static/xiaoyin.jpg',
	title: '小隐·观山民宿酒店',
	subtitle: '中国北京.2016'
}, {
	src: '/static/silk-road.jpg',
	title: '故宫博物院·海上丝绸之路展',
	subtitle: '中国北京.2017'
}, {
	src: '/static/red.jpg',
	title: '紅',
	subtitle: '中国北京·2016'
}]

export default () =>
	<div className="home">
		<div className="container">
			<Swiper {...params} containerClass="swiper-container home-swiper">
				{
					pictures.map((p, i) =>
						<div key={i}>
							<div style={{backgroundImage: `url(${p.src})`}}/>
							<p className="swiper-title">{p.title}</p>
							<p className="swiper-subtitle">{p.subtitle}</p>
						</div>
					)
				}
			</Swiper>
		</div>
	</div>