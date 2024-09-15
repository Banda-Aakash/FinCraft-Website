import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ContinuousCarousel from './ContinuousCarousel';


const items = [
    { src: './image.webp', alt: 'Mobile 1' },
    { src: './amfi.webp', alt: 'Mobile 2' },
    { src: './Augmount.webp', alt: 'Mobile 3' },
    { src: './npci.webp', alt: 'Mobile 3' },
    { src: './lendbox.png', alt: 'Mobile 3' },
];


const Home = () => {
    return (
        <div className="home-page">
            <div className='container'>
                <div>
                    <img src='./thathanobg.png' className='thatha' alt='thatha'></img>
                </div>
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
                <div className="carousel-container">
                    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000}>
                        <div>
                            <img src='./Mobile.png' alt='Mobile 1' />
                        </div>
                        <div>
                            <img src='./Mobile.png' alt='Mobile 2' />
                        </div>
                        <div>
                            <img src='./Mobile.png' alt='Mobile 3' />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='container1'>
                <div className='content2'>
                    <p className='Heading'>Roundup Savings!</p>
                    <p className='Description'>Save automatically on every spend</p>
                </div>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
            </div>

            <div className='container2'>
                <img src='./AugmountGold.png' alt='RoundUp!' className='augmountimg'></img>
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
                <img src='./AugmountSilver.png' alt='RoundUp!' className='augmountimg'></img>
            </div>

            <div className='container4'>
                <img src='./logo.png' alt='RoundUp!' className='img'></img>
                <div className='content2'>
                    <p className='Heading'>Invest into P2P!</p>
                    <p className='Description'>Grow your savings through peer to peer investments</p>
                </div>
            </div>

            <div className='download'>
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
            </div>

            <div>
            <p className='Partners'>Our Investors & Partners</p>
                <ContinuousCarousel items={items} />
            </div>
        </div>
    );
};

export default Home;
