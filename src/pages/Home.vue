<template>
  <div class="home">
      <x-header :left-options="{showBack: false}">首页</x-header>
      <InputNav></InputNav>
      <Carousel></Carousel>
      <CardNav :message='messageOne' :list='listOne'></CardNav>
      <CardNav :message='messageTwo' :list='listTwo'></CardNav>
      <CardNav :message='messageThree' :list='listThree'></CardNav>



      <div class="div"></div>
  </div>
</template>
<script>

import { XHeader } from 'vux';
import InputNav from '../components/home/InputNav.vue';
import Carousel from '../components/home/Carousel.vue';
import CardNav from '../components/home/CardNav.vue';
export default {
  components: {
    XHeader,
    InputNav,
    Carousel,
    CardNav,
  },
  data(){
    return{
      messageOne:'最新足球赛事报道',
        listOne:[{
          title: '欧联-两将2球阿森纳4-1告捷 马竞拉齐奥均胜',
          img: 'http://n.sinaimg.cn/sports/transform/120/w580h340/20180406/ia6H-fytnfyn9367534.jpg'
        }, {
          title: '英超-奥巴梅扬2球拉卡泽特破门 阿森纳3-0完胜',
          img: 'http://n.sinaimg.cn/sports/transform/272/w650h422/20180401/FtqL-fyssmme5092466.jpg'
        }, {
          title: '视频-欧联杯：维尔贝克双响 阿森纳胜AC米兰晋级八强',
          img: 'http://n.sinaimg.cn/sports/transform/320/w640h480/20180316/ZrDk-fyshfuq2870839.jpg'
        }],

      messageTwo:'最新足球趣事',
      listTwo: [{
          title: '穆帅复兴路变保温杯plus！温格进欧冠真有戏了？',
          img: 'http://n.sinaimg.cn/sports/transform/325/w650h475/20180406/zujO-fytnfyn9380073.jpg'
        }, {
          title: '马竞官宣飞翼骨折赛季报销 西媒曝将无缘世界杯',
          img: 'http://n.sinaimg.cn/sports/transform/260/w620h440/20180316/xRuP-fysiihw4860283.jpg'
        }, {
          title: '费力不讨好！阿森纳功臣进球却遭自家球迷群讽',
          img: 'http://n.sinaimg.cn/sports/transform/253/w650h403/20180316/YicS-fyshfuq0458271.png'
        }],

        messageThree:'精彩赛事分析',
        listThree:[{
          title: '真王者！阿森纳帝星让人叹服 温格进欧冠全靠他',
          img: 'http://n.sinaimg.cn/sports/transform/218/w650h368/20180406/ZC6t-fysuuyc0652388.jpg'
        }, {
          title: '温格被偏爱1将狂打脸！他一下场阿森纳全被盘活',
          img: 'http://n.sinaimg.cn/sports/transform/329/w650h479/20180402/nDF9-fyssmme5403292.jpg'
        }, {
          title: '阿森纳英超首发：奥巴梅扬回归 厄齐尔+威尔希尔',
          img: 'http://n.sinaimg.cn/sports/transform/215/w650h365/20180401/Izrk-fyssmme4668598.jpg'
        }]
    }
  }
}
</script>
<style scoped>

</style>
