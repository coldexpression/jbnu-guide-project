import React, { Component } from 'react'
import "../MainPage.css"

export default class Article extends Component {
    render(){
        const titles = this.props.title.map((value,index) => {
            if(index !== 0) {
                return (
                    <div>
                        <input type="checkbox" class="checkbox" id={index} />
                        <label for={index} className="arti__slide">
                            <div className="arti__question">
                                <b>{value}</b>
                            </div>
                        </label>
                        <p className="arti__answer">
                            {this.props.desc[index]}
                        </p>
                    </div>
                    
                )
            }
        })
        
            return (
            <article>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
                <div className="arti__title">
                    <b>{this.props.explain}</b> 관련 정보들이 있는 메뉴 입니다.<br/>
                </div>
                {titles}
            </article>
        )
    }
}