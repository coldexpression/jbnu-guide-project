import React, { Component } from 'react'
import "../components/design.css"

export default class Article extends Component {
    render(){
        const titles = this.props.title.map((value,index) => {
            if(index !== 0) {
                return (
                    <div>
                        {value}<br/>{this.props.desc[index]}
                    </div>
                )
            }
        })
        
            return (
            <article>
                <div className="arti__title">
                    <b>{this.props.explain}</b> 관련 정보들이 있는 메뉴 입니다.<br/>
                </div>
                {titles}
            </article>
        )
    }
}