import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Weather from './Weather'
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="home">
                    <div className="home-block home-block--left">
                        <img src="https://vibrant-darwin-340aee.netlify.com/fonts/main-icon.svg" alt="main-icon"></img>
                    </div>
                    <div className="home-block home-block--right">
                        <div>
                            <p>Bisim'in sağladığı bisiklet kiralama hizmetine ait istasyonlardaki doluluk oranını görebilirsiniz.</p>
                            <NavLink to="/stations" className="button" activeClassName="router-link-exact-active is-active">İstasyonlar</NavLink>
                            <Weather />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
