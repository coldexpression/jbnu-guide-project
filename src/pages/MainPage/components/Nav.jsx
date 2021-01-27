import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        var tags = [];
        for(var i=0; i<this.props.data.length; i++){
            var d = this.props.data[i];
            tags.push(<h2 key={d.id}><a href="#" data-id={d.id} onClick={function(e) {
                this.props.onClick(Number(e.target.dataset.id));
            }.bind(this)}>{d.title[0]}</a></h2>)
        }
        return (
            <nav>
                <ol>
                   {tags}
                </ol>
            </nav>
        )
    }
}