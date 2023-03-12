import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedinIn, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>66 Winchester Rd</p>
                            <h4>Merrifield</h4>

                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }}/>070 1345 5562</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }}/>Mars@Travel.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>"Lorem ipsum dolor sit amet consectetur
                       adipisicing elit. Repellat maiores animi 
                       voluptatibus delectus nisi
                       similique"</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }}/>
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }}/>
                        <FaLinkedinIn size={30} style={{ color: '#fff', marginRight: '1rem' }}/>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer