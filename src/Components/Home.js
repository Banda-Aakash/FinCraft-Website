import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ContinuousCarousel from './ContinuousCarousel';
import { FaPiggyBank, FaCoins, FaShoppingCart, FaUnlock } from 'react-icons/fa';

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

                    <img src='./image.webp' alt='Paytm' className='paytmlogo'></img>
                    <img src='./Augmount.webp' alt='Paytm' className='augmountlogo'></img>
                    <img src='./lendbox.png' alt='Paytm' className='lendboxlogo'></img>
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
                <p className='why'>Why FinCraft?</p>
                <div className='whycontent'>
                    <div className='setup'>
                        <p className='h3'>Set Up</p>
                        <p className='p'>Download the app, set up your account & start your daily savings journey today - all in less than 1 minute</p>
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
                    <div className='video'>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="investment-options-container">
                <div className="option-item">
                    <FaPiggyBank className="option-icon" />
                    <p className='h3'>Automatic investment</p>
                    <p className='p'>With Autopay, just link your bank account once and all your investments will be done automatically.</p>
                </div>
                <div className="option-item">
                    <FaCoins className="option-icon" />
                    <p className='h3'>Invest in Gold & Mutual Funds</p>
                    <p className='p'>With Spenny, you have an option to invest your roundups into either Digital Gold or Mutual Funds.</p>
                </div>
                <div className="option-item">
                    <FaShoppingCart className="option-icon" />
                    <p className='h3'>Buy one-time</p>
                    <p className='p'>Invest a lump sum amount directly into Gold or a Mutual Fund Basket of your choice – starting with as low as Rs. 10.</p>
                </div>
                <div className="option-item">
                    <FaUnlock className="option-icon" />
                    <p className='h3'>Withdraw any time</p>
                    <p className='p'>There are no lock-ins. So, you can safely withdraw your money any time you want without any hassle.</p>
                </div>
            </div>


            <div>
                <p className='Partners'>Our Investors & Partners</p>
                <ContinuousCarousel items={items} />
            </div>
        </div>
    );
};

export default Home;
