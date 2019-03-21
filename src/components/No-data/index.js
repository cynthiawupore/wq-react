import React, { Component ,Fragment } from 'react';
import './index.less';
import noData from '../../assets/images/no-data@2x.png'

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className={'No-data'}>
                    <img className="img" src={noData} alt="" />
                    <p className={'txt'}>暂无相关数据</p>
                </div>
            </Fragment>
        )
    }
}
