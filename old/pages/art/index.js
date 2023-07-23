import Link from 'next/link'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./art.less"

const params = {
  slidesPerView: 'auto',
  autoHeight: true,
  keyboard: true,
  spaceBetween: 10
}

const pictures = [{
  key: 'brick-seat',
  src: '/art/brick-seat.jpg',
  title: '砖座',
  subtitle: '中国北京·2018'
}, {
  key: 'mo',
  src: '/art/mo.jpg',
  title: '膜',
  subtitle: '中国北京·2018'
}]

export default () =>
  <div className="art">
    <Swiper {...params} containerClass="swiper-container art-swiper">
      {
        pictures.map(p =>
          <div key={p.key}>
            <Link href="/art/[name]" as={`/art/${p.key}`}>
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