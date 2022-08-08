import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import blockchainService1 from "../../../assets/images/blockchainService1.png"
import AOS from "aos";
import axios from 'axios';
import { WOW } from "wowjs";
const OnlineStore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);


  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init()
  })
  // =============================== What we Do API ============================================

  const [Data, setData] = useState([])
  const [Error, setError] = useState(false)
  async function whatWeDo() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/what-we-do/`);
      setData(api.data.response)

    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    whatWeDo()
  }, [])
  return (
    // ===================== store area ========================
    <section className='store_wrap'>
      <Container >
        <div className='store_details'>
          {Error ? 'error' : Data.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
            : <Row>
              <Col sm={6} md={6} lg={6} xl={6} >
                <figure className='store_img wow zoomIn' >
                  <img src={Data[1].image} alt='Store' />
                </figure>
              </Col>
              <Col sm={6} md={6} lg={6} xl={6}>
                <div className='store_div wow zoomIn'>
                  <div className='store_text'>
                    <h4 className='h4_title'>What We Do?</h4>
                    <h2 className='h2_title'>{Data[1].title}</h2>
                    <p>{Data[1].content}</p>
                    <button type='button' className='btn'>More About Us</button>
                  </div>
                </div>
              </Col>
            </Row>
          }
        </div>
      </Container>
    </section>
    // ===================== // store area ========================
  )
}

export default OnlineStore