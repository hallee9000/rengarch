import Link from 'next/link'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./projects.less"

const params = {
	slidesPerView: 'auto',
	autoHeight: true,
	mousewheel: {
		sensitivity: 2
	},
	spaceBetween: 10
}

const pictures = [{
	key: 'bonus',
	src: '/static/projects/bonus.jpg',
	title: 'BONUS 空间设计',
	subtitle: '中国西安.2018'
}, {
	key: 'xiaoyin',
	src: '/static/projects/xiaoyin.jpg',
	title: '小隐·观山民宿酒店',
	subtitle: '中国北京.2016'
}, {
	key: 'silk-road',
	src: '/static/projects/silk-road.jpg',
	title: '故宫博物院·海上丝绸之路展',
	subtitle: '中国北京.2017'
}]

export default () =>
	<div className="projects">
		<Swiper {...params} containerClass="swiper-container projects-swiper">
			{
				pictures.map(p =>
					<div key={p.key}>
						<Link href={`/projects/detail?name=${p.key}`} as={`/projects/${p.key}`}>
							<a>
								<div className="slide-mask">
									<p className="mask-title">{ p.title }</p>
									{ p.subtitle }
								</div>
								<img src={p.src}/>
							</a>
						</Link>
					</div>
				)
			}
		</Swiper>
	</div>