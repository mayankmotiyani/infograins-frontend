import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogImage from '../../../assets/media/man-work.png';
import { IoIosWarning } from 'react-icons/io';
import { WOW } from "wowjs";
export default function BlogSection() {
    // ========================== Blog API ===========================
    const [BlogData, setBlogData] = useState([])
    const [ErrorBlogData, setErrorBlogData] = useState(false)
    async function blogApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/blog_list/`);
            // console.log(api.data.response);
            setBlogData(api.data.response.slice(0, 3))
        } catch (error) {
            setErrorBlogData(true)
        }
    }

    useEffect(() => {
        blogApi()
    }, [])
    useEffect(() => {
        const wow = new WOW({ live: false }); 
        wow.init()
    })

    return (
        <>
            <section className='home_blog_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='blog_head'>
                                <h2 className='h2_title'>Our Blogs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi officiis, perspiciatis commodi ipsum reiciendis exercitationem, repudiandae optio, mollitia natus dolor. Natus corrupti consequuntur aliquam, dolorem nihil temporibus. Nulla, molestiae.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {ErrorBlogData ?
                            <div className='warning'>
                                <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                            </div>
                            : BlogData.length === 0 ?
                                <Row>
                                              <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                : BlogData.map((e, key) => {
                                    return <Col sm={12} md={12} lg={4} xl={4} key={key}>
                                        <div className='blog_section wow zoomIn'>
                                            <img src={BlogImage} alt="" />
                                            <div className='blog_content'>
                                                <h3 className='h3_title'>{e.title}</h3>
                                                <p>{e.description}</p>
                                                <Link to={e.blog_url}>Read More</Link>
                                            </div>
                                        </div>
                                    </Col>
                                })}
                        {/* <Col lg={4}>
                            <div className='blog_section_EMPTY'>
                                <div className='image_EMPTY'></div>
                                <div className='blog_content'>
                                    <div className='head_title'></div>
                                    <p className='para'></p>
                                    <div className='link'></div>
                                </div>
                            </div>
                        </Col> */}
                        {/* <Col lg={4}>
                            <div className='blog_section'>
                                <img src={BlogImage} alt="" />
                                <div className='blog_content'>
                                    <h3 className='h3_title'>Our Blog Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora labore dolorum. Aspernatur, corporis quis et amet voluptatum ad natus quo ab repudiandae incidunt vero officia autem odit, odio quod.</p>
                                    <Link to="/blog/demo">Read More</Link>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}
