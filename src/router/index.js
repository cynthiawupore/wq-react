import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import {
    Home, //首页
    Detail, //详情
    NoMatch, // 404
} from './config'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/detail" component={ Detail }/>
                        <Route component={ NoMatch } />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default Index;
