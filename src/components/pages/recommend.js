import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';

import '../../assets/css/recommend.css'
export default class Recommend extends Component {
    // 轮播图
    config = {
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            hideOnClick: true,
            clickable: true,
        },
        // on: {
        //     slideChange: function () {
        //         console.log(this.activeIndex);
        //     },
        // },
    };
    state = {
        songsheets: [],//推荐歌单
        banners:[],//轮播图
        newsongs:[],//最新音乐
    }
    getpersonalized(){
        return this.$axios.get('/api/personalized?limit=6');
    }
    getbanner(){
        return this.$axios.get('/api/banner');
    }
    getnewsong(){
        return this.$axios.get('/api/personalized/newsong');
    }
    componentDidMount() {
        // 批量请求
        this.$axios.all([this.getpersonalized(),this.getbanner(),this.getnewsong()]).then(
            this.$axios.spread((resperson,resbanner,resnewsong)=>{
                this.setState({
                    songsheets:resperson.data.result,
                    banners:resbanner.data.banners,
                    newsongs:resnewsong.data.result,
                })
            })
        )


        // this.$axios.get('/api/personalized?limit=6').then(res => {
        //     this.setState({
        //         songsheets: res.data.result
        //     })
        // })
        // this.$axios.get('/api/banner').then(res => {
        //     this.setState({
        //         banners: res.data.banners
        //     })
        // })
        //需要手动json格式化处理
        // fetch('/api/personalized/newsong').then(res=>res.json()).then(res=>{
        //     this.setState({
        //         newsongs:res.result
        //     })
        // })
    }
    render() {
        return (
            <div className="recommend">
                <div className="wrap">
                    {/* 轮播图 */}
                    <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={this.config} className="your-classname swiper">
                        <div className="swiper-wrapper">
                            {
                                this.state.banners.map((item,idx)=>{
                                    return(
                                        <div className="swiper-slide" key={idx}>
                                            <img src={item.imageUrl} alt={item.typeTitle}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                        <div className="swiper-pagination"></div>
                    </AwesomeSwiper>
                    {/* 推荐歌单 */}
                    <h2>推荐歌单</h2>
                    <div className="sheetlist">
                        {
                            this.state.songsheets.map(item => {
                                return (
                                    <div className="sheetitem" key={item.id}>
                                        <img className="img" src={item.picUrl} alt="t" />
                                        <p className="title">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* 最新音乐 */}
                    <h2>最新音乐</h2>
                    <div className="songlist">
                        {
                            this.state.newsongs.map(item=>{
                                return(
                                    <div className="songitem" key={item.id}>
                                        <div className="left">
                                            <div className="title">{ item.name }</div>
                                            <div className="thide">
                                                <i className="sq">SQ</i>
                                                {
                                                    item.song.artists.map((artisitem,idx)=>{
                                                        // 使用伪元素添加
                                                        // let el = item.song.artists.length > 1 && idx !== item.song.artists.length-1 ? <i>/</i> :null;
                                                        return(
                                                            <span key={artisitem.id}>
                                                                {artisitem.name}
                                                                {/* {el} */}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <i className="right iconfont icon-play"></i>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
