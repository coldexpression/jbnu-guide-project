import React, { Component } from 'react'


export default class Article extends Component {
    render(){
        const titles = this.props.title.map((value,index) => {
            if(index !== 0) {
                return <div>{value}<br/>{this.props.desc[index]}</div>
            }
        })
        
            return (
            <article>
                {titles}
            </article>
        )
    }
}