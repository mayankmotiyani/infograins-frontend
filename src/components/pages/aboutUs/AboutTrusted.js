import React, { useRef, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import config from './Config';
import { BsArrowRight } from "react-icons/bs";
import secure from "../../../assets/images/coin/secure.png";
import credibility from "../../../assets/images/coin/credibility.png";
import analysis from "../../../assets/images/coin/analysis.png";
import carousel from '../../../assets/images/popup_imgs.png';

const AboutTrusted = () => {
    // const first = useRef(null)

    // useEffect(() => {
    //     first.current.innerHTML = `${config.discription}`;
    // }, [])

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: false,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };

    return (
        <>
            <section className='AboutTrusted-wrap'>
                <Container>
                    {/* <div id='demo' ref={first}>
                    </div> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: diss }}></div> */}
                    <div className='AboutTrusted-title'>
                        <h2 className='h2_title'>Most Trusted Cryptocurrency Platform</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <OwlCarousel className='owl-theme hero_slider' loop margin={10} {...options}>
                                <div className='item'>
                                    <div className='inner_section m-4'>
                                        <div className='AboutTrusted-card-wrap'>
                                            <figure className='AboutTrusted-card-img'>
                                                <Image src={secure} alt='Secure' />
                                            </figure>
                                            <div className='AboutTrusted-card-details'>
                                                <h3 className='h3_title'>Easy To Transact</h3>
                                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='inner_section  m-4'>
                                        <div className='AboutTrusted-card-wrap'>
                                            <figure className='AboutTrusted-card-img'>
                                                <Image src={secure} alt='Secure' />
                                            </figure>
                                            <div className='AboutTrusted-card-details'>
                                                <h3 className='h3_title'>Easy To Transact</h3>
                                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='inner_section m-4'>
                                        <div className='AboutTrusted-card-wrap'>
                                            <figure className='AboutTrusted-card-img'>
                                                <Image src={secure} alt='Secure' />
                                            </figure>
                                            <div className='AboutTrusted-card-details'>
                                                <h3 className='h3_title'>Easy To Transact</h3>
                                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                        {/* <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={secure} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>Easy To Transact</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={analysis} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>No Fear Of Loss</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={secure} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>Easy To Transact</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={credibility} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>No Fear Of Loss</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutTrusted