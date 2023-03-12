import React from 'react'
import { Link } from 'react-router-dom'
import './PackagesCard.css'

function PackagesCard() {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>- Olympus Mons -</h3>
                <span className="bar">
                    <p className="btc">1 BTC</p>
                    <p> 3 DAYS</p>
                    <p> Views</p>
                    <p> Not Featured</p>
                    <p> No Private Quarters</p>
                    <Link to = '/contact' className='btn'>Book</Link>

                </span>
            </div>
            <div className="card">
                <h3>- Hellas Planitia -</h3>
                <span className="bar">
                    <p className="btc">3 BTC</p>
                    <p> 6 DAYS</p>
                    <p> Views</p>
                    <p> Featured</p>
                    <p> No Private Quarters</p>
                    <Link to = '/contact' className='btn'>Book</Link>

                </span>
            </div>
            <div className="card">
                <h3>- Tharsis -</h3>
                <span className="bar">
                    <p className="btc">6 BTC</p>
                    <p> 10 DAYS</p>
                    <p> Views</p>
                    <p> Featured</p>
                    <p> Private Quarters</p>
                    <Link to = '/contact' className='btn'>Book</Link>

                </span>
            </div>
        </div>
    </div>
  )
}

export default PackagesCard