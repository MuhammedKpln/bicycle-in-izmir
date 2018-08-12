import React, { Component } from 'react';
import Header from './Header'
class MadeBy extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="crew">
                    <div class="container">
                        <ul>
                            <li>
                                <div><img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/26165520_1984170975191021_7522195456585187532_n.jpg?_nc_cat=0&oh=54d4773642c01cf7a9c5ff9341774e40&oe=5BF60324" alt="Muhammed Kaplan"></img></div>
                                <h1>Muhammed Kaplan</h1>
                                <h2>Frontend/Backend Developer</h2>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/muhammedk00" class="button">Instagram</a>
                                <hr/>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/muhammedkpln/bicycle-in-izmir" class="button">Github</a>
                            </li>

                            <li>
                                <div><img src="https://vibrant-darwin-340aee.netlify.com/assets/erdem_uslu.jpeg" alt="Erdem Uslu"></img></div>
                                <h1>Erdem Uslu</h1>
                                <h2>Frontend Developer<br/>
                                </h2>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/erdemuslu/bicycle-in-izmir" class="button">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MadeBy;
