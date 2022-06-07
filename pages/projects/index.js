import Link from 'next/link'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./projects.less"

const params = {
  slidesPerView: 'auto',
  loop: true,
  keyboard: true,
  autoHeight: true,
  mousewheel: {
    sensitivity: 2
  },
  spaceBetween: 10
}

const pictures = [{
  key: 'self-abased-chapel',
  src: '/projects/self-abased-chapel.jpg',
  title: '自卑礼堂',
  subtitle: '中国北京.2019'
}, {
  key: 'gaoxia-public-stage',
  src: '/projects/gaoxia-public-stage.jpg',
  title: '高丽营一村高下剧场',
  subtitle: '中国北京顺义区.2020'
}, {
  key: 'lizigou',
  src: '/projects/lizigou.jpg',
  title: '李子沟村的红砖自然礼堂',
  description: 'Lizigou Red Brick Ceremonial Hall Building in rural countryside by KEYWORKS+RENGARCH',
  subtitle: '中国河南洛阳.2017-2019'
}, {
  key: 'bonus',
  src: '/projects/bonus.jpg',
  title: 'BONUS 空间设计',
  subtitle: '中国西安.2018'
}, {
  key: 'in-the-middle-of-the-cloud',
  src: '/projects/in-the-middle-of-the-cloud.jpg',
  title: '云中间',
  subtitle: '中国北京.2021'
}, {
  key: 'dian',
  src: '/projects/dian.jpg',
  title: '靛',
  subtitle: '中国西安·2019'
}, {
  key: 'cfa',
  src: '/projects/cfa.jpg',
  title: '北京中国民族民间舞蹈家协会空间',
  subtitle: '中国北京.2019'
}, {
  key: 'xiaoyin',
  src: '/projects/xiaoyin.jpg',
  title: '小隐·观山民宿酒店',
  subtitle: '中国北京.2016'
}, {
// 	key: 'silk-road',
// 	src: '/projects/silk-road.jpg',
// 	title: '故宫博物院·海上丝绸之路展',
// 	subtitle: '中国北京.2017'
// }, {
  key: 'red',
  src: '/projects/red.jpg',
  title: '紅',
  subtitle: '中国北京·2016'
}]

export default () =>
  <div className="projects">
    <Swiper {...params} containerClass="swiper-container projects-swiper">
      {
        pictures.map(p =>
          <div key={p.key}>
            <Link href="/projects/[name]" as={`/projects/${p.key}`}>
              <a>
                <div className="slide-mask">
                  <p className="mask-title">{ p.title }</p>
                  {
                    p.description &&
                    <p>{ p.description }</p>
                  }
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
