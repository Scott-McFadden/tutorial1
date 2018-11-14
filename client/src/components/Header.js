import React, {Component} from 'react';
import {connect} from 'react-redux';
//import authReducer from "../reducers/authReducer";
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component
{

    renderContent() {
        // one of 3 values (null, false, or logged in)
        console.log('header.rendercontent =>', this.props.auth);
        if (this.props.auth == null)
            return;
        if (this.props.auth.user === 'none')
            return <li><a href='/callbackgoogle'>Login with Google</a></li>;
        return (
            <div>
                <ul className='right'>
                    <li key='1'><Payments />&nbsp; |&nbsp;</li>
                    <li key='4'>&nbsp;Credits: {this.props.auth.credits} &nbsp;| </li>
                    <li key='2'><a href='/userDetails'>{this.props.auth.name}</a></li>
                    <li key='3'><a href='/auth/logout' >|&nbsp;Logoff</a></li>
            </ul>
            </div>
        );

    }
    render() {
        console.log('user ->', this.props.user);
        let logoTarget='/surveys';
        if (this.props.auth == null)
            logoTarget='/';

        else if (this.props.auth.user === 'none')
            logoTarget='/';
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={logoTarget}
                        className="left brand-logo"
                    >Tutorial 1 </Link>

                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
  return {auth  };
}

export default connect(mapStateToProps)(Header);
