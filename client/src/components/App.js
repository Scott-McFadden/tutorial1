import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
const App = () => {
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
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
