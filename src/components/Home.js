import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Weather from './Weather'
import MainIcon from '../assets/main-icon.svg'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home">
                    <div className="home-block home-block--left">
                        <img src={MainIcon} alt="main-icon"></img>
                    </div>
                    <div className="home-block home-block--right">
                        <div>
                            <p>You can see the occupancy rate of the bicycle rental service provided by Alta Bicycle Share, Inc.</p>
                            <NavLink to="/stations" className="button" activeClassName="router-link-exact-active is-active">Stations</NavLink>
                            <Weather />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
