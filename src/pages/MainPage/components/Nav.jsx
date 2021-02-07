import React, { Component } from 'react'
import "../components/design.css"

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
                        {context}
                    </ol>
                </nav>
            </body>
        )
    }
}