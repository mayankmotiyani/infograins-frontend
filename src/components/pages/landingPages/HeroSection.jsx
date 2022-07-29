import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
// import "../../../assets/style/pages/landing_page/heroSection.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeroImage from '../../../assets/images/blockchainService1.png';
import video from "../../../assets/images/video/video_1.mp4"
import axios from 'axios';
export default function HeroSection() {
    // const [owlData, setOwlData] = useState([])
    // const getHeroContent = async () => {
    //     try {
    //         const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/hero-section-content/`);
    //         setOwlData(url.data.response)
    //         console.log("url", url.data.response);

    //     } catch (error) {
    //         console.log("error", error.message)
    //     }

    // }

    // useEffect(() => {
    //     getHeroContent()
    //     const interval = setInterval(() => {
    //         getHeroContent()
    //     }, 10000)
    //     return () => clearInterval(interval)

    // }, [])

    // ===================================== Hero Section API ===================================
    const [SliderData, setSliderData] = useState([])
    async function sliderContent() {
        const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/hero-section-content/`);
        // console.log(api.data.response);
        setSliderData(api.data.response)
    }

    useEffect(() => {
        sliderContent()
        setTimeout(() => {
            sliderContent()
        }, 500);
    }, [])

    // ===================================== Hero Section API ===================================
    const options = {
        margin: 30,
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
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };
    return (
        <>
            <section className='hero-wrap'>
                <video autoPlay muted loop id="myVideo" width="100%">
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                    {/* <source src={video} type="video/mp4" /> */}
                </video>
                <div className='OwlCarousel-wrap'>
                    <OwlCarousel className='owl-theme hero_slider' loop margin={10} {...options}>

                        {
                            SliderData.map((ele, index) => {
                                return <div className='item' key={index}>
                                    <div className='inner_section'>
                                        <Container>
                                            <Row>
                                                <Col lg={6} >
                                                    <div className='hero_slide_section_content'>
                                                        <div className='hero_content_div'>
                                                            {/* <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6> */}
                                                            <h2 className='h2_title hero_cont_heading'>{ele.title}</h2>
                                                            <p className='hero_cont_para'>{ele.content}</p>
                                                            <button className='hero_cont_btn'>Click Me</button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='hero_slide_section_img'>
                                                        <Image src={HeroImage} fluid />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            })
                        }

                        {/* <div className='item'>
                            <div className='inner_section'>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_content'>
                                                <div className='hero_content_div'>
                                                    <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6>
                                                    <h2 className='h2_title hero_cont_heading'>Heading Text Here</h2>
                                                    <p className='hero_cont_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo ea explicabo dolor, libero eveniet et nobis, praesentium exercitationem consequatur vel quidem iusto ipsum id inventore? Amet nam repudiandae dolorum?</p>
                                                    <button className='hero_cont_btn'>Click Me</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_img'>
                                                <Image src={HeroImage} fluid />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='inner_section'>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_img'>
                                                <Image src={HeroImage} fluid />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_content'>
                                                <div className='hero_content_div'>
                                                    <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6>
                                                    <h2 className='h2_title hero_cont_heading'>Heading Text Here</h2>
                                                    <p className='hero_cont_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo ea explicabo dolor, libero eveniet et nobis, praesentium exercitationem consequatur vel quidem iusto ipsum id inventore? Amet nam repudiandae dolorum?</p>
                                                    <button className='hero_cont_btn'>Click Me</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div> */}
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}