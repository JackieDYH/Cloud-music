import React, { Component } from 'react'

export default class Songinfo extends Component {
    state={
        audioid:'',
        tip:'播放'
    }
    componentDidMount(){
        this.setState({
            audioid:this.props.match.params.songid,
        })
        // console.log(this.props.match.params.songid,111111)
    }
    start(){
        let audio = this.refs.myaudio;
        if(audio.paused){
            audio.play()
            this.setState({
                tip:'暂停'
            })
        }else{
            audio.pause()
            this.setState({
                tip:'播放'
            })
        }
    }
    render() {
        return (
            <div>
                <h3>歌曲播放</h3>
                <audio src={'https://music.163.com/song/media/outer/url?id='+this.state.audioid+'.mp3'} controls ref="myaudio"></audio>
                <button onClick={()=>this.start()}>{this.state.tip}</button>
            </div>
        )
    }
}
