import Link from 'next/link'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./home.less"

const params = {
  autoplay: {
    delay: 4200
  },
  speed: 500,
  loop: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  spaceBetween: 10
}

const pictures = [{
  src: '/self-abased-chapel.jpg',
  link: 'projects/[name]',
  asLink: 'projects/self-abased-chapel',
  title: '自卑礼堂',
  subtitle: '中国北京.2019'
}, {
  src: '/projects/gaoxia-public-stage.jpg',
  link: 'projects/[name]',
  asLink: 'projects/gaoxia-public-stage',
  title: '高丽营一村高下剧场',
  subtitle: '中国北京顺义区.2020'
}, {
  src: '/projects/lizigou.jpg',
  link:  'projects/[name]',
  asLink: 'projects/lizigou',
  title: '李子沟村的红砖自然礼堂 Lizigou Red Brick Ceremonial Hall Building in rural countryside by KEYWORKS+RENGARCH',
  subtitle: '中国河南洛阳.2017-2019'
}, {
  src: '/bonus.jpg',
  link: 'projects/[name]',
  asLink: 'projects/dian',
  title: 'BONUS 空间设计',
  subtitle: '中国西安.2018'
}, {
  src: '/in-the-middle-of-the-cloud.jpg',
  link: 'projects/[name]',
  asLink: 'projects/in-the-middle-of-the-cloud',
  title: '云中间',
  subtitle: '中国北京.2021'
}, {
  src: '/dian.jpg',
  link: 'projects/[name]',
  asLink: 'projects/dian',
  title: '靛',
  subtitle: '中国西安·2019'
}, {
  src: '/cfa.jpg',
  link: 'projects/[name]',
  asLink: 'projects/cfa',
  title: '北京中国民族民间舞蹈家协会空间',
  subtitle: '中国北京.2019'
}, {
  src: '/xiaoyin.jpg',
  link: 'projects/[name]',
  asLink: 'projects/xiaoyin',
  title: '小隐·观山民宿酒店',
  subtitle: '中国北京.2016'
}, {
// 	src: '/silk-road.jpg',
// 	title: '故宫博物院·海上丝绸之路展',
// 	subtitle: '中国北京.2017'
// }, {
  src: '/red.jpg',
  link: 'projects/[name]',
  asLink: 'projects/red',
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
              <Link href={p.link} as={p.asLink}>
                <a>
                  <div style={{backgroundImage: `url(${p.src})`}}/>
                  <p className="swiper-title">{p.title}</p>
                  <p className="swiper-subtitle">{p.subtitle}</p>
                </a>
              </Link>
            </div>
          )
        }
      </Swiper>
    </div>
  </div>
