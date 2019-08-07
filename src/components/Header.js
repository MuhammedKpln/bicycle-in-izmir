import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <a href="/" className="router-link-exact-active router-link-active">
            B
          </a>
        </div>
        <div className="header__nav">
          <NavLink
            exact
            to="/"
            activeClassName="router-link-exact-active is-active"
          >
            Homepage
          </NavLink>
          <NavLink
            to="/stations"
            activeClassName="router-link-exact-active is-active"
          >
            Stations
          </NavLink>

          <NavLink
            to="/madeby"
            activeClassName="router-link-exact-active is-active"
          >
            Contributors
          </NavLink>

          <a href="//github.com/muhammedkpln/bicycle-in-izmir">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M11.9985 0C5.373 0 0 5.50867 0 12.3041C0 17.7393 3.438 22.3503 8.208 23.9787C8.808 24.092 9.027 23.7121 9.027 23.3858C9.027 23.0932 9.0165 22.3196 9.0105 21.2933C5.673 22.0362 4.968 19.6434 4.968 19.6434C4.4235 18.2218 3.636 17.8434 3.636 17.8434C2.5455 17.0806 3.717 17.0959 3.717 17.0959C4.9215 17.1832 5.5545 18.3643 5.5545 18.3643C6.6255 20.2439 8.364 19.7016 9.048 19.3861C9.156 18.591 9.4665 18.0487 9.81 17.7408C7.146 17.4298 4.344 16.3744 4.344 11.6607C4.344 10.3173 4.812 9.21891 5.58 8.35799C5.4555 8.04701 5.0445 6.79546 5.697 5.10272C5.697 5.10272 6.705 4.77184 8.997 6.36347C9.954 6.09079 10.98 5.95445 12.0015 5.94986C13.02 5.95599 14.0475 6.09079 15.006 6.365C17.2965 4.77337 18.303 5.10425 18.303 5.10425C18.957 6.79852 18.546 8.04855 18.423 8.35952C19.1925 9.22044 19.656 10.3188 19.656 11.6623C19.656 16.3882 16.851 17.4283 14.178 17.7331C14.6085 18.1131 14.9925 18.8637 14.9925 20.0111C14.9925 21.6563 14.9775 22.9829 14.9775 23.3858C14.9775 23.7152 15.1935 24.0981 15.8025 23.9771C20.565 22.3472 24 17.7377 24 12.3041C24 5.50867 18.627 0 11.9985 0Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
