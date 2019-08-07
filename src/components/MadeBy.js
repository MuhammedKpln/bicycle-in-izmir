import React, { Component } from 'react';
import Header from './Header';
class MadeBy extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="crew">
          <div class="container">
            <ul>
              <li>
                <div>
                  <img
                    src="https://avatars3.githubusercontent.com/u/17166855?s=460&v=4"
                    alt="Muhammed Kaplan"
                  />
                </div>
                <h1>Muhammed Kaplan</h1>
                <h2>Frontend/Backend Developer</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/muhammedk00"
                  class="button"
                >
                  Instagram
                </a>
                <hr />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/muhammedkpln/bicycle-in-izmir"
                  class="button"
                >
                  Github
                </a>
              </li>

              <li>
                <div>
                  <img
                    src="https://avatars3.githubusercontent.com/u/17902044?s=460&v=4"
                    alt="Erdem Uslu"
                  />
                </div>
                <h1>Erdem Uslu</h1>
                <h2>
                  Frontend Developer
                  <br />
                </h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/erdemuslu/bicycle-in-izmir"
                  class="button"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MadeBy;
