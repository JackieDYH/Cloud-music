import React, { Component } from 'react'

import '../../assets/css/hotsong.css'
export default class Hotsong extends Component {
    state={
        songarr:[],
        coverimg:'',//背景图
        updataTime:'',//更新时间
    }
    componentDidMount(){
        this.$axios.get('/api/top/list/?id=3778678').then(res=>{
            // console.log(res,111)
            let date = new Date(res.data.playlist.updateTime);
            let month = date.getMonth()+1;
            let day = date.getDate();
            let time = `${month<10 ? '0'+month : month}月${day<10 ? '0' + day : day}日`;
            this.setState({
                songarr:res.data.playlist.tracks,
                coverimg:res.data.playlist.coverImgUrl,
                updataTime:time,
            })
        })
    }
    render() {
        return (
            <div className="hotlist">
                <div className="top" style={{ background:'url('+ this.state.coverimg +')' }}>
                    <p>云音乐</p>
                    <h1>热歌榜</h1>
                    <p>更新日期：{this.state.updataTime}</p>
                </div>
                <div className="songlist">
                    {
                        this.state.songarr.map((songitem,idx)=>{
                            return(
                                <div className="songitem" key={idx}
                                    onClick={()=>this.props.history.push('/song/'+songitem.id)}
                                >
                                    <div className="left">{ (idx+1) < 10 ? '0'+(idx+1) : (idx+1)}</div>
                                    <div className="right">
                                        <div className="txt">
                                            <h3 className="title">{ songitem.name }</h3>
                                            <p className="thide">
                                                {
                                                    songitem.ar.map((item,id)=>{
                                                        return(
                                                            <span key={id}>{ item.name }</span>
                                                        )
                                                    })
                                                }
                                                - {songitem.name}
                                            </p>
                                        </div>
                                        <i className="iconfont icon-play"></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
