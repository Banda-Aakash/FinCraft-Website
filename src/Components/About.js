import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for styling
import './About.css';
import CardComponent from './Cardcomponent';


const About = () => {
    const customTheme = {
        borderDotColor: 'black',
        descriptionColor: '#262626',
        dotColor: '#d0cdc4',
        eventColor: 'white',
        lineColor: '#d0cdc4',
        subtitleColor: '#7c7c7c',
        titleColor: '#405b73',
        yearColor: '#405b73',
    };

    useEffect(() => {
        const elements = document.querySelectorAll('.vertical-timeline-element');

        const observerOptions = {
            root: null, // Use the viewport as the container
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the element is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', `delay-${index}`);
                } else {
                    entry.target.classList.remove('visible', `delay-${index}`);
                }
            });
        }, observerOptions);

        elements.forEach((element) => observer.observe(element));

        // Cleanup observer on unmount
        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="about-page">
            {/* About Us Section */}
            <div className="about-container">
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Saving money is the first step toward achieving financial freedom. At FinCraft, we believe that even the smallest contributions can lead to big results. We're here to make saving a natural part of your routine, helping you build a better financial future, one day at a time.</p>
                    <p>Yours truly, <br /> FinCraft ❤️</p>
                </div>
            </div>

            {/* Story Section */}
            <section className="story-section">
                <h2>Our Story</h2>
                <p>
                    FinCraft was founded with one mission: to simplify investments and make them accessible to everyone.
                    From a small startup, we've grown into a company that empowers individuals with powerful tools
                    to manage their financial futures. Every step of the way, innovation has been at the core of what we do.
                </p>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <h2>Timeline</h2>
                <VerticalTimeline animate={true} layout="2-columns">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: customTheme.eventColor, color: customTheme.descriptionColor }}
                        contentArrowStyle={{ borderRight: `7px solid ${customTheme.eventColor}` }}
                        date="2015"
                        iconStyle={{ background: customTheme.dotColor, color: customTheme.borderDotColor }}
                    >
                        <h3 className="vertical-timeline-element-title">2015 - Founding Year</h3>
                        <p>FinCraft was founded, aiming to disrupt the traditional investment landscape.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: customTheme.eventColor, color: customTheme.descriptionColor }}
                        contentArrowStyle={{ borderRight: `7px solid ${customTheme.eventColor}` }}
                        date="2017"
                        iconStyle={{ background: customTheme.dotColor, color: customTheme.borderDotColor }}
                    >
                        <h3 className="vertical-timeline-element-title">2017 - First Major Funding</h3>
                        <p>We secured Series A funding, allowing us to expand our services and reach new markets.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: customTheme.eventColor, color: customTheme.descriptionColor }}
                        contentArrowStyle={{ borderRight: `7px solid ${customTheme.eventColor}` }}
                        date="2019"
                        iconStyle={{ background: customTheme.dotColor, color: customTheme.borderDotColor }}
                    >
                        <h3 className="vertical-timeline-element-title">2019 - Launch of Mobile App</h3>
                        <p>Our innovative mobile app was released, making it easier than ever for users to manage their investments.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: customTheme.eventColor, color: customTheme.descriptionColor }}
                        contentArrowStyle={{ borderRight: `7px solid ${customTheme.eventColor}` }}
                        date="2022"
                        iconStyle={{ background: customTheme.dotColor, color: customTheme.borderDotColor }}
                    >
                        <h3 className="vertical-timeline-element-title">2022 - International Expansion</h3>
                        <p>FinCraft expanded its services globally, reaching users in over 30 countries.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <h2>Our Vision</h2>
                <p>
                    At FinCraft, our vision is to democratize access to financial services, empowering individuals everywhere
                    to take control of their financial futures. We believe in making investing easy, secure, and accessible.
                </p>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2>Our Team & Culture</h2>
                <p>
                    Our team is a diverse group of professionals passionate about technology and finance.
                    We foster a culture of innovation, collaboration, and transparency. At FinCraft, we believe that
                    great products are built by empowered teams who care deeply about their work.
                </p>

                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <CardComponent
                    frontImg="https://via.placeholder.com/150"
                    role="John Doe"
                    description="Lead Developer"
                    backInfo="John is an expert in React and Node.js with over 10 years of experience."
                />
                <CardComponent
                    frontImg="https://via.placeholder.com/150"
                    role="Jane Smith"
                    description="UI/UX Designer"
                    backInfo="Jane is a creative designer with a passion for creating intuitive user interfaces."
                />
                {/* Add more cards as needed */}
            </div>
            </section>

            

        </div>
    );
};

export default About;
