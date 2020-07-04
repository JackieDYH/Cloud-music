import React, { Component } from 'react'

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import '../../assets/css/search.css'
export default class Search extends Component {
    state={
        searchtxt:'',
    }
    search(){
        console.log({keywords:this.state.searchtxt},1111111)
        this.$axios({
            url:'/search/suggest',
            params:{keywords:this.state.searchtxt,type:'mobile'}
        })
        .then(res=>{
            console.log(res,111111)
        })
    }
    iptChange(e){
        this.setState({
            searchtxt:e.target.value
        })
    }
    render() {
        return (
            <div className="searchlist">
                <div className="search">
                    <input type="text" placeholder="搜索歌曲、歌手、专辑" 
                        autoComplete="off"
                        value={ this.state.searchtxt }
                        onChange={(e) => this.iptChange(e)}
                    />
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={()=>this.search()}/>
                </div>
            </div>
        )
    }
}
