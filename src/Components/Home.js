import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-page">
            <div className="content">
                <h6 className='heading'>Investments made faster with FinCraft!</h6>

                <Link to="https://play.google.com" className="download-button">
                    <img
                        src="Playstore.png"
                        alt="Google Play"
                        className="button-logo"
                    />
                    <div className="button-text">
                        <span className="platform">For Android</span>
                        <span className="download-now">Download now</span>
                    </div>
                </Link>

                {/* <a href="https://play.google.com" className="download-button">
                    <img
                        src="Playstore.png"
                        alt="Google Play"
                        className="button-logo"
                    />
                    <div className="button-text">
                        <span className="platform">For Android</span>
                        <span className="download-now">Download now</span>
                    </div>
                </a> */}

                <p className='Partners'>Our Partners</p>

                <Link to="https://play.google.com" className="download-button">
                    <img
                        src="Playstore.png"
                        alt="Google Play"
                        className="button-logo"
                    />
                    <div className="button-text">
                        <span className="platform">For Android</span>
                        <span className="download-now">Download now</span>
                    </div>
                </Link>
                <Link to="https://play.google.com" className="download-button">
                    <img
                        src="Playstore.png"
                        alt="Google Play"
                        className="button-logo"
                    />
                    <div className="button-text">
                        <span className="platform">For Android</span>
                        <span className="download-now">Download now</span>
                    </div>
                </Link>
                <Link href="https://play.google.com" className="download-button">
                    <img
                        src="Playstore.png"
                        alt="Google Play"
                        className="button-logo"
                    />
                    <div className="button-text">
                        <span className="platform">For Android</span>
                        <span className="download-now">Download now</span>
                    </div>
                </Link>
            </div>
            <div className='container1'>
                <div className='content2'> 
                    <p className='Heading'>Roundup Savings!</p>
                    <p className='Description'>Save automatically on every spend</p>
                </div>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
            </div>

            <div className='container2'>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
                <div className='content2'>
                    <p className='Heading'>Invest in 24K Gold!</p>
                    <p className='Description'>Convert your savings into gold investments.</p>
                </div>
            </div>

            <div className='container3'>
                <div className='content2'>
                    <p className='Heading'>Invest in Silver!</p>
                    <p className='Description'>Turn your savings into silver investments.</p>
                </div>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
            </div>

            <div className='container4'>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
                <div className='content2'>
                    <p className='Heading'>Invest into P2P!</p>
                    <p className='Description'>Grow your savings through peer to peer investments</p>
                </div>
            </div>

        </div>
    );
};

export default Home;
