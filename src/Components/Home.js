import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-page">
            <div className="content">
                <h6 className='heading'>Investments made faster with FinCraft</h6>

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
            <div className='container1'>ihi</div>
            <div className='container2'>ihi</div>
            <div className='container3'>ihi</div>

        </div>
    );
};

export default Home;
