import { withRouter } from 'next/router'
import Error from 'next/error'
import Swiper from 'react-id-swiper'
import ProjectBonus from 'components/ProjectBonus'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./detail.less"

const params = {
	autoplay: true,
	centeredSlides: true,
	slidesPerView: 'auto',
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
			description: '项目所在西安民乐园步行街，楼上是居住楼，楼底是两层的商业业态，这是今日街道的一个缩影。',
			enDescription: 'The project located on the walking street of Min Le Park in Xi\'an. As the accommodation function in its higherfloors and the commercial function in the first and second floor, it miniatures today\'s street.'
		},
		{
			img: '3.jpg',
			description: '项目所在位置处于联排白色店铺之中。空间现状正是一个白色的房子。我们希望通过这样一处场所来讨论城市的“公众性”，将“开放”与“分享”嵌入到空间之中，使其成为今天的“城市客厅”。',
			enDescription: 'Sitting among a series of raw white shops, it is a white house at present. We hope to discuss the “publicity” of our city through such a place and implant "open" and "sharing" into the space to make it an “urban lounge” today.'
		},
		{
			img: '4.jpg',
			title: '回馈街道的立面',
			description: '关于公众参与感,我们希望在建筑立面上有所体现，使其显示出公众性。公众参与感引发各种行为的可能，包括：坐、站、倚、靠、躲雨等。这些日常动人的感受成为设计的出发点，即城市需要一个后退的立面回馈街道。在设计中，高度成为立面的划分线，形成“高低不一的切面”。切面的高度是功能的反应，延伸至空间内外。进退中形成形态不一的半室外空间参与到街道的互动中。',
			enTitle: 'Facade appreciating street in return',
			enDescription: 'As for the possibility of public engagement, we hope it can be reflected on the building facade and show the publicity. Public participation initiates the possibility of variable activities, such as sitting, standing, reclining, leaning, sheltering from the rain，etc. Feelings brought by these daily activities become our design conception — a spatial area in front of the facade is necessary for our urban life. With contour lines dividing the facade during the design, horizontal planes of different height are produced. Horizontal planes stretch into the street space as their heights reflect their function. Along with the advancing and retreating, semi-outdoor spaces are naturally shaped and interact with the street.'
		},
		'5.jpg',
		'7.jpg',
		{
			img: '8.jpg',
			title: '“城市客厅”',
			description: '更多的公共空间可能产生更多的集体记忆。“城市客厅”是我们对公共项目的一种寄望。设计中，尽可能让一层空间以最大的限度给予城市街道。通过对空间的整理，一层空间获得最大的高度和深度，适应了功能的多变性。在这里，空间不仅仅是早午餐厅，也可以是展厅、放映室、剧场、活动厅，一个“城市客厅”。',
			enTitle: '“Urban Lounge”',
			enDescription: 'More public spaces probably produce more collective memories.  "Urban Lounge" is our expectation of public projects. Our design offers as much ground floor as possible to the city street. By organizing the space, the ground floor gets the maximum height and depth so that it adapts to the variability of functions. As a result, the space turns into not only a brunch restaurant , but also an "urban Lounge" which may act as an exhibition hall, a cinema, a theater and an activity hall.'
		},
		'9.jpg',
		'11.jpg',
		'12.jpg'
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
	'fengshiguangju': [
		'0.jpg',
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'6.jpg',
		'7.jpg',
		'9.jpg',
		'10.jpg',
		'11.jpg',
		'12.jpg',
		'13.jpg',
		'14.jpg',
		'15.jpg',
		'16.jpg',
		'17.jpg',
		'18.jpg',
		'19.jpg',
		'20.jpg',
		'21.jpg',
		'22.jpg'
	],
	'cfa': [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'7-1.jpg',
		'8-1.jpg',
		'8.jpg',
		'9.jpg',
		'10.jpg',
		'11.jpg',
		'12.jpg',
		'13.jpg',
		'14.jpg',
		'15.jpg',
		'16.jpg',
		'17.jpg',
		'18.jpg',
		'19.jpg',
		'20.jpg'
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
	'dian': [
		'0.jpg',
		'1.jpg',
		'2.jpg',
		// '3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.jpg',
		'9.jpg',
		'10.jpg',
		'11.jpg',
		'12.jpg',
		'13.jpg',
		'14.jpg',
		'15.jpg',
		'16.jpg',
	],
}

export default withRouter((props) => {
	const projectName = props.router.query.name
	const pictures = projects[projectName]
	return (
		!pictures ?
		<Error statusCode={404}/> :
		<div className="project-detail">
			<Swiper {...params} containerClass="swiper-container detail-swiper">
				{
					pictures.map(p =>
						<div key={typeof p === 'string' ? p : p.img}>
							{
								typeof p === 'string' ?
								<img src={`/projects/${projectName}/${p}`}/> :
								<img src={`/projects/${projectName}/${p.img}`}/>
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