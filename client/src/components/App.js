import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import UserDetails from './UserDetails';




class  App extends Component  {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
//<!-- BrowserRouter can only handle one child -->
        return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route path='/surveys/new' component={SurveyNew} />
                        <Route exact path='/surveys' component={Dashboard}/>
                        <Route exact path='/auth/google/callback' component={Landing} />
                        <Route exact path='/userDetails' component={UserDetails} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        )
    };
};

export default connect(null, actions)(App);
