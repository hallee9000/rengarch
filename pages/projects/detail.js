import { withRouter } from 'next/router'
import Swiper from 'react-id-swiper'
import { numberToArray } from 'utils/helper'
import ProjectBonus from 'components/ProjectBonus'
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
		{
			img: '0.jpg',
			component: <ProjectBonus/>
		},
		'1.jpg',
		{
			img: '2.jpg',
			title: '回馈街道的立面',
			description: '关于公众参与感,我们希望在建筑立面上有所体现，使其显示出公众性。公众参与感引发各种行为的可能，包括：坐、站、倚、靠、躲雨等。这些日常动人的感受成为设计的出发点，即城市需要一个后退的立面回馈街道。在设计中，高度成为立面的划分线，形成“高低不一的切面”。切面的高度是功能的反应，延伸至空间内外。进退中形成形态不一的半室外空间参与到街道的互动中。',
			enTitle: 'Facade appreciating street in return',
			enDescription: 'As for the possibility of public engagement, we hope it can be reflected on the building facade and show the publicity. Public participation initiates the possibility of variable activities, such as sitting, standing, reclining, leaning, sheltering from the rain，etc. Feelings brought by these daily activities become our design conception — a spatial area in front of the facade is necessary for our urban life. With contour lines dividing the facade during the design, horizontal planes of different height are produced. Horizontal planes stretch into the street space as their heights reflect their function. Along with the advancing and retreating, semi-outdoor spaces are naturally shaped and interact with the street.'
		},
		'3.jpg',
		'4.jpg',
		'4.1.jpg',
		{
			img: '4.2.jpg',
			title: '“城市客厅”',
			description: '更多的公共空间可能产生更多的集体记忆。“城市客厅”是我们对公共项目的一种寄望。设计中，尽可能让一层空间以最大的限度给予城市街道。通过对空间的整理，一层空间获得最大的高度和深度，适应了功能的多变性。在这里，空间不仅仅是早午餐厅，也可以是展厅、放映室、剧场、活动厅，一个“城市客厅”。',
			enTitle: '“Urban Lounge”',
			enDescription: 'More public spaces probably produce more collective memories.  "Urban Lounge" is our expectation of public projects. Our design offers as much ground floor as possible to the city street. By organizing the space, the ground floor gets the maximum height and depth so that it adapts to the variability of functions. As a result, the space turns into not only a brunch restaurant , but also an "urban Lounge" which may act as an exhibition hall, a cinema, a theater and an activity hall.'
		},
		'4.3.jpg',
		{
			img: '4.4.jpg',
			title: '从立面折出的长桌',
			description: '用立面/剖面的方式去思考空间的平面，立面的形式语言折叠成平面的布局。身处于相同的时空中，去体会和感受一个折叠的场所。设计中，餐桌成为建筑立面构件的一部分，通过家具建筑化的处理，进一步强化空间公共性。',
			enTitle: 'Long table folded from the facade',
			enDescription: 'Considering plan in terms of elevation and section, the formal language of elevation is folded into plan layout. Standing at the same spot and time, a folding space can be experienced. In the design, dining table becomes a part of the building facade, which further strengthens the publicity of space through the furniture’s architecturization.'

		},
		'4.5.jpg',
		'4.6.jpg',
		{
			img: '4.7.jpg',
			description: '夹层位于吧台之上，在此可以俯瞰一层大厅，夹层的设计强化了一层公共大厅作为主空间的意向。',
			enDescription: 'The mezzanine situates above the bar, where visitors can overlook the lobby, and the mezzanine\'s design reinforces the intention of public hall as main space.'
		},
		'5.jpg',
		'6.jpg',
		'7.jpg',
		{
			img: '8.jpg',
			description: '二层的室内空间，通过架高台面表达与地面的脱离，同时，灰色自流平地面的反射，将外在光线吸入。形成现实脱离的意象。',
			enDescription: 'An image of the separation from reality is formed when dining surface is elevated from the ground and external sunlight shines in via the reflection of gray self-leveling flooring.'
		},
		'9.jpg',
		{
			img: '10.jpg',
			title: '阳台的观望',
			description: '通过绘画的方式去表达“城市的孤独感”，城市中的阳台像一个个生活的窗口，“阳台的观望“即是集体的记忆。二层漂浮的阳台使店铺不是独立的个体，而是城市界面的顺延，与建筑本身周边居民阳台形成相互之间的照应。',
			enTitle: 'Gazing from the balcony',
			enDescription: 'Our design intends to express "the loneliness of our city" through painting : every balcony insides our city seems like a window of urban life and gazing from the balcony is our collective memory.  As the balcony floating on the second floor, our space does not exist as an independent individual but act as the extension of urban interface，forming a mutual correspondence to the original residential balconies.'
		},
		{
			img: '11.gif',
			description: '项目所在西安民乐园步行街，楼上是居住楼，楼底是两层的商业业态，这是今日街道的一个缩影。',
			enDescription: 'The project located on the walking street of Min Le Park in Xi\'an. As the accommodation function in its higherfloors and the commercial function in the first and second floor, it miniatures today\'s street.'
		},
		{
			img: '12.gif',
			description: '项目所在位置处于联排白色店铺之中。空间现状正是一个白色的房子。我们希望通过这样一处场所来讨论城市的“公众性”，将“开放”与“分享”嵌入到空间之中，使其成为今天的“城市客厅”。',
			enDescription: 'Sitting among a series of raw white shops, it is a white house at present. We hope to discuss the “publicity” of our city through such a place and implant "open" and "sharing" into the space to make it an “urban lounge” today.'
		}
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
						<div key={typeof p === 'string' ? p : p.img}>
							{
								typeof p === 'string' ?
								<img src={`/static/projects/${projectName}/${p}`}/> :
								<img src={`/static/projects/${projectName}/${p.img}`}/>
							}
							{
								typeof p !== 'string' &&
								(
									p.description ?
									<div className="detail-mask mask-dark">
										{
											p.title &&
											<h3>{ p.title }</h3>
										}
										<p>{ p.description }</p>
										{
											p.enTitle &&
											<h3>{ p.enTitle }</h3>
										}
										<p>{ p.enDescription }</p>
									</div> :
									p.component
								)
							}
						</div>
					)
				}
			</Swiper>
		</div>
	)
})