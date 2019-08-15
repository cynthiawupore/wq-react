import React, { Component , Fragment } from 'react';
import './index.less'
import { resDataPretreat }  from '../../utils/res-data-pretreat'
import network from '../../network'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    componentDidMount(){ }

    // 例子：请求接口: 查询列表
    getList = async () => {
        let params = {}
        const queryList = await network.blockChain.home.queryList(params)
        resDataPretreat(queryList, this.handlerList)
    }

    // 例子：处理返回: 查询列表
    handlerList = (res) => {
        // todo... 处理返回的数据
    }

    render() {
        return (
            <Fragment>
                index
            </Fragment>
        )
    }
}
