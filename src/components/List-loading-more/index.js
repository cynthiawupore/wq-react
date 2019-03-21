import React, { Component ,Fragment } from 'react';
import './index.less';
import loading from '../../assets/images/loading.png'

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className={'List-loading-more'}>
                    <img src={loading} alt="" className={'loading-icon'}/>
                    <span className="txt">正在获取数据</span>
                </div>
            </Fragment>
        )
    }
}
