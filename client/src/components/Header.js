import React, {Component} from 'react';

class Header extends Component
{
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">Tutorial 1</a>
                    <ul className='right'>
                        <a href='/callbackgoogle' >Login With Google</a>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
