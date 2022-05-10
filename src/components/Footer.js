import React, { Component } from 'react';

const Footer = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .1,
                borderColor: '#f0a500',
                width: 100

            }}
        />
    );
    return (
        <footer class="page-footer grey darken-4">
            <ColoredLine />
            <div class="container">
                <div class="row">
                    <div class="col s12 l6">
                        <h5 class=" amber-text">About Me</h5>
                        <p>Hey There! Enjoy ReactStreams by Bishop</p>
                        <h5 class="amber-text">I work with a variety of technologies - see below</h5>
                        <p>Node - ReactJs - Javascript - Dart - MaterializeCss -Bootstrap- Git - SQL - Firebase- Mobx - RestApi -</p>
                    </div>
                    <div class="col s12 l4 offset-l2">
                        <h5 class="amber-text">Contact Me</h5>
                        <ul>

                            <li>
                                <a href="https://github.com/johnsonbs5/" class="grey-text text-lighten-3"><i class="fab fa-github"></i> Github</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/bishop_manziel/" class="grey-text text-lighten-3"><i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" class="grey-text text-lighten-3"><i class="fab fa-facebook"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yash-raut-55330715a/" class="grey-text text-lighten-3"><i class="fab fa-linkedin"></i> Linked-In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-copyright grey darken-3 ">
                <div class="container center-align amber-text">&copy; 2022 Bishop Johnson</div>
            </div>
        </footer>

    )
}

export default Footer;