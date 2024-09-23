import { withRouter } from 'next/router'
import Error from 'next/error'
import Swiper from 'react-id-swiper'
import ProjectBonus from 'components/ProjectBonus'
import ProjectLizigou from 'components/ProjectLizigou'
import Video from 'components/content/Video'
import GaoxiaPublicStage from 'components/content/GaoxiaPublicStage'
import SelfAbasedChapel from 'components/content/SelfAbasedChapel'
import InTheMiddleOfTheCloud from 'components/content/InTheMiddleOfTheCloud'
import XYZGallery from 'components/content/XYZGallery'
import QFactor from 'components/content/QFactor'
import DriftingIkatBox from 'components/content/DriftingIkatBox'
import 'react-id-swiper/src/styles/css/swiper.css'
import "./detail.less"

const params = {
  autoplay: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  keyboard: true,
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
  'drifting-ikat-box': [
    {
      img: '/white-background.jpg',
      component: <DriftingIkatBox/>
    },
    {
      img: '/white-background.jpg',
      component: <Video link="https://v.qq.com/txp/iframe/player.html?vid=j35571zo8bk"/>
    },
    "01-“海边漂流的絣染盒子”,“drifting ikat frame box on the seashore”©礽建筑+关念工斯.jpg",
    "02-“海上漂流的絣染盒子”,“drifting ikat frame box on the sea”©礽建筑+关念工斯.jpg",
    "03-海南黎族织娘,Hainan Li ethnic group women©深圳玲珑时空文化创意有限公司.jpg",
    "04-黎锦文化田野调查,field research on Li brocade©深圳玲珑时空文化创意有限公司，马誉珂（中央民族大学师资博士后）.jpg",
    "05-织娘与絣染架，weaver and the ikat frame ©马誉珂（中央民族大学师资博士后）.jpg",
    "06-”漂流回展厅的絣染盒子“,the ikat frame box drifting back to the exhibition hall©吕博.jpg",
    "07-展厅室内,exhibition hall interior©吕博.jpg",
    "08-两个絣染架盒子置入在“TIN的道场”,two ikat frame boxes are placed in the “daochang of TIN”©吕博.jpg",
    "09-展厅室内,exhibition hall interior©吕博.jpg",
    "10-展开的絣染架盒子,the unfolded ikat frame box©吕博.jpg",
    "11-展开的絣染架盒子,the unfolded ikat frame box©吕博.jpg",
    "12-絣染架单元立面穿插分析图，analysis diagram of the interlaced combination of ikat frame units©礽建筑+关念工斯.jpg",
    "13-絣染架作为建构单元的立面,The façade of  ikat frames as construction units©吕博.jpg",
    "14-絣染架作为建构单元的立面,The façade of  ikat frames as construction units©吕博.jpg",
    "15-以“结绳记事”延展生成的构造方式,the construction method of knotting ropes to form an assembled and disassembled installation box©吕博.jpg",
    "16-絣染架作为建构单元,The ikat frames as a construction unit©吕博.jpg",
    "17-絣染架盒子建构轴测图，axonometric drawing of the construction of the ikat frame box ©礽建筑+关念工斯.jpg",
    "20-展开的絣染架盒子,the unfolded ikat frame box©吕博.jpg",
    "23-展厅室内,exhibition hall interior©吕博.jpg",
    "25-展开的絣染架盒子,the unfolded ikat frame box©吕博.jpg",
    "27-外露的五金合件以及绑带作为固定节点，exposed hardware and straps as fixed nodes©吕博.jpg",
    "28-外露的五金合件以及绑带作为固定节点，exposed hardware and straps as fixed nodes©吕博.jpg",
    "29-编织而成的立面，woven facade©吕博.jpg",
    "30-编织而成的立面，woven facade©吕博.jpg",
    "31-拆絣后的棉线与外立面编织立面图，cotton thread after untying and woven facade elevation©深圳玲珑时空文化创意有限公司，礽建筑+关念工斯.jpg",
    "32-外立面编织分析，facade weaving  analysis diagram©礽建筑+关念工斯.jpg",
    "33-草木染棉线的柱子，the column of plant-dyed cotton threads©吕博.jpg",
    "34-草木染棉线的柱子，the column of plant-dyed cotton threads©吕博.jpg",
    "35-絣染架与牛皮凳，ikat frame and leather stool©吕博.jpg",
    "36-竹子”沙发“，bamboo sofa©吕博.jpg",
    "37-盒子作为展示陈列功能，the display function of the box©礽建筑+关念工斯.jpg",
    "38-展厅平面图，exhibition hall floor plan©礽建筑+关念工斯.jpg",
    "39-装置立面图,installation elevation©礽建筑+关念工斯.jpg",
    "40-装置立面图,installation elevation©礽建筑+关念工斯.jpg",
    "41-装置详图,installation details©礽建筑+关念工斯.jpg",
  ],
  'bonus': [
    {
      img: '/white-background.jpg',
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
  'in-the-middle-of-the-cloud': [
    {
      img: '/white-background.jpg',
      component: <InTheMiddleOfTheCloud/>
    }, {
      img: '01.jpg',
      description: '从西村口看建筑',
      enDescription: 'view of the building from the west village entrance'
    }, {
      img: '02.jpg',
      description: '建筑与围栏西立面',
      enDescription: 'west facade of building and fence'
    }, {
      img: '03.jpg',
      description: '从南边田间看建筑',
      enDescription: 'view from the fields in the south to the building'
    }, {
      img: '04.jpg',
      description: '从南边看玻璃单元框架',
      enDescription: 'view of the glass unit frame from the south'
    }, {
      img: '05.jpg',
      description: '从东南边看玻璃单元框架',
      enDescription: 'view of the glass unit frame from the southeast side'
    }, {
      img: '06.jpg',
      description: '改造前院落照片',
      enDescription: 'photos of the yard before the renovation'
    }, {
      img: '07.jpg',
      description: '从东边看玻璃框架',
      enDescription: 'view of the glass frame from the east'
    }, {
      img: '08.jpg',
      description: '玻璃框架间',
      enDescription: 'in the middle of the glass frame'
    }, {
      img: '09.jpg',
      description: '从南边看玻璃框架',
      enDescription: 'view of the glass frame from the south'
    }, {
      img: '10.jpg',
      description: '玻璃框架间',
      enDescription: 'in the middle of the glass frame'
    }, {
      img: '11.jpg',
      description: '架高平台',
      enDescription: 'elevated platform'
    }, {
      img: '12.jpg',
      description: '架高平台',
      enDescription: 'elevated platform'
    }, {
      img: '13.jpg',
      description: '从平台上看南边风景',
      enDescription: 'view from the platform to the south'
    }, {
      img: '14.jpg',
      description: '从平台上看南边风景',
      enDescription: 'view from the platform to the south'
    }, {
      img: '15.jpg',
      description: '影壁',
      enDescription: 'screen wall'
    }, {
      img: '16.jpg',
      description: '原建筑与玻璃框架之间',
      enDescription: 'between the original building and glass frame'
    }, {
      img: '17.jpg',
      description: '村口值班室钢板表皮与院落围栏的呼应',
      enDescription: 'the echo between the steel plate skin of the duty room at the village entrance and the fence of the courtyard'
    }, {
      img: '18.jpg',
      description: '金属围栏',
      enDescription: 'metal fence'
    }, {
      img: '19.jpg',
      description: '金属围栏',
      enDescription: 'metal fence'
    }, {
      img: '20.jpg',
      description: '接待室',
      enDescription: 'the reception room'
    }, {
      img: '21.jpg',
      description: '分析图',
      enDescription: 'diagram'
    }, {
      img: '22.jpg',
      description: '可使用的旧玻璃照片',
      enDescription: 'photo of usable old glass'
    }, {
      img: '23.jpg',
      description: '已有玻璃尺寸与数量统计图',
      enDescription: 'old glass size and quantity statistics'
    }, {
      img: '24.jpg',
      description: '玻璃使用分布图',
      enDescription: 'glass use distributed diagram'
    }, {
      img: '25.jpg',
      description: 'axonometric diagram',
      enDescription: '轴测图'
    }, {
      img: '26.jpg',
      description: '植物覆盖界面参考照片',
      enDescription: 'plant covered ”interface“ reference'
    }, {
      img: '27.jpg',
      description: '植物覆盖界面效果图',
      enDescription: 'rendering of the plant covered ”interface“'
    }, {
      img: '28.jpg',
      description: '屋顶平面图',
      enDescription: 'roof plan'
    }, {
      img: '29.jpg',
      description: '首层平面图',
      enDescription: '1F floor plan'
    }, {
      img: '30.jpg',
      description: '立面图',
      enDescription: 'elevation'
    }, {
      img: '31.jpg',
      description: '玻璃节点图',
      enDescription: 'glass junction drawing'
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
  'Q-factor': [
    {
      img: '/white-background.jpg',
      component: <QFactor/>
    },
    '01-街景图,street view of the project©刘俊男.jpg',
    '02-沿街渐变，gradient along the street ©刘俊男.jpg',
    '03-沿街立面，facade along the street ©刘俊男.jpg',
    '04-沿街立面，facade along the street ©刘俊男.jpg',
    '05-改造前立面.jpg',
    '06-从东北角看立面，view of the facade from the northeast©刘俊男.jpg',
    '07-从东南角看立面，view of the facade from the southeast©刘俊男.jpg',
    '08-新增砖片表皮，brick facade©刘俊男.jpg',
    '08-砖片表皮节点，brick facade ©高雨滴.jpg',
    '09-从展览空间向街道看，view from the exhibition space towards the street©刘俊男.jpg',
    '09-东立面图，east elevation©礽建筑.jpg',
    '10-临街展览空间,pop-up exhibition space©刘俊男.jpg',
    '11-临街展览空间,pop-up exhibition space©刘俊男.jpg',
    '12-蜂窝纸板单元组合，honeycomb cardboard unit combination©高雨滴.jpg',
    '12-平面布置图,the floor plan©礽建筑.jpg',
    '13-卖场区，the store area©刘俊男.jpg',
    '13-折叠推拉木构架，retractable wooden structure©刘俊男.gif',
    '14-折叠推拉木构架，retractable wooden structure©刘俊男.jpg',
    '15-折叠推拉木构架，retractable wooden structure©刘俊男.jpg',
    '16-折叠推拉木构架，retractable wooden structure©刘俊男.jpg',
    '16-折叠推拉木构架多场景使用，retractable wooden structure for multi-scenario use©高雨滴.jpg',
    '17-折叠推拉木构架，retractable wooden structure©刘俊男.jpg',
    '18--折叠推拉木构架，retractable wooden structure©刘俊男.jpg',
    '18-木架构立面图,plan and elevation of wooden structure©礽建筑.jpg',
    '19-卖场区，the store area©刘俊男.jpg',
    '20--卖场区，the store area©刘俊男.jpg',
    '25-木架构节点示意图,diagram of wooden structure©礽建筑.jpg',
    '25-折叠推拉木构架底部，retractable wooden structure©刘俊男.jpg',
    '26-蜂窝纸板单元收银台，honeycomb cardboard unit counter©刘俊男.jpg'
  ],
  'gaoxia-public-stage': [
    {
      img: '/white-background.jpg',
      component: <GaoxiaPublicStage/>
    },
    {
      img: '/white-background.jpg',
      component: <Video link="https://v.qq.com/txp/iframe/player.html?vid=i327066nkew"/>
    },
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
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
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
  ],
  'self-abased-chapel': [
    {
      img: '/white-background.jpg',
      component: <SelfAbasedChapel/>
    },
    {
      img: '/white-background.jpg',
      component: <Video link="https://v.qq.com/txp/iframe/player.html?vid=d3230jt35ko"/>
    },
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
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '23-1.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
    '48.jpg',
  ],
  'lizigou': [
    {
      img: '/white-background.jpg',
      component: <ProjectLizigou/>
    },
    '0.jpg',
    '1.jpg',
    '2-1.jpg',
    '2-2.jpg',
    '3',
    '4-1.jpg',
    '4-2.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg'
  ],
  'xyz-gallery': [
    {
      img: '/white-background.jpg',
      component: <XYZGallery/>
    },
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
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
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
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
          pictures.map((p, i) =>
            <div key={i}>
              {
                typeof p === 'string' ?
                <img src={`/projects/${projectName}/${p}`}/> :
                <img src={p.img==='/white-background.jpg' ? p.img : `/projects/${projectName}/${p.img}`}/>
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
