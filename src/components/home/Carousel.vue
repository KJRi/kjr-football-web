<template>
    <div id="carousel">
        <swiper loop auto :list="demo06_list" @on-index-change="demo06_onIndexChange"></swiper>
    </div>
</template>
<script>
    const baseList = [{
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1674366350,957705626&fm=27&gp=0.jpg',
    }, {
        url: 'javascript:',
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=172943760,206597843&fm=27&gp=0.jpg',
    }, {
        url: 'javascript:',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522780704072&di=58f4755979388728030dd3f4cc62e202&imgtype=0&src=http%3A%2F%2Fs3img.city.sina.com.cn%2Ftravel%2Ftrip%2Ftrip_tuijian%2F1393903088.jpg',
        fallbackImg: '../../../static/images/04.png'
    }]
    const urlList = baseList.map((item, index) => ({
        url: 'http://m.baidu.com',
        img: item.img,
        fallbackImg: item.fallbackImg,
    }))
    import { Swiper, GroupTitle, SwiperItem, } from 'vux'
    export default {
        components: {
            Swiper,
            SwiperItem,
            GroupTitle,
        },
        methods: {
            demo06_onIndexChange(index) {
                this.demo06_index = index
            },
        },
        data() {
            return {
                demo06_list: urlList,
            }
        }
    }
</script>
<style scoped>

</style>
