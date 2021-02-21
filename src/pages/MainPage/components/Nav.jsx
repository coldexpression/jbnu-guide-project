import React, { Component } from 'react'
import "../MainPage.css"
import { Link } from "react-router-dom";
import  proFileImg  from './profile.png';
import { Profiler } from 'react';

export default class Nav extends Component {
    render() {
        const handleOnClick = (e) => {
            this.props.onClick(Number(e.target.dataset.id));
        }

        const context = this.props.data.map((item) => (
            <div className="navi__li">
                 <h2 key={item.id}>
                    <a href="#" data-id={item.id} onClick={handleOnClick.bind(this)}>
                        {item.title[0]}
                    </a>
                </h2>
            </div>
        ))
            

        return (
            
            <body>
                <nav className="navi">
                    <ol className="navi__menu">
                        <a className="navi__header">
                            전북대 길라잡이
                         </a>  
                        {context}
                        <Link to="/profile">
                            <img className = "navi__profile" src= {proFileImg} alt="이미지">
                            </img>
                        </Link>
                    </ol>
                </nav>
            </body>
        )
    }
}