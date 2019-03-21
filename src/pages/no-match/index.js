import React, { Component , Fragment } from 'react';
import { Link } from "react-router-dom";
import './index.less'
import imgNotFount from '../../assets/images/404.png'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    componentDidMount(){}

    render() {
        return (
            <Fragment>
                <div className={'no-match'}>
                    <img src={ imgNotFount } alt=""/>
                    <p>抱歉,您找的页面不存在 <Link to="/">回到首页</Link></p>
                </div>
            </Fragment>
        )
    }
}
