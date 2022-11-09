import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="#">Sports Equipments</Link></li>
                            <li><Link to="#">Shopping Online</Link></li>
                            <li><Link to="#">Payment Online</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                        <li><Link to="/">Home</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/signin">SignIn</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Shopping Sport Equipment</h3>
                        <p>Shopping Sports Equipment is an online shop for all sports equipment in kelibia and welcomes to all.</p>
                    </div>
                    <div className="col item social"><Link to="#"><i className="icon ion-social-facebook"></i></Link><Link to="#"><i className="icon ion-social-twitter"></i></Link><Link to="#"><i className="icon ion-social-snapchat"></i></Link><Link to="#"><i className="icon ion-social-instagram"></i></Link></div>
                </div>
                <p className="copyright">Shopping Sport Equipment © 2021</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
