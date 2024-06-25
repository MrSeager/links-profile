import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Button} from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgAva from './assets/images/avatar-jessica.jpeg';

const LinksPage = () => {
    AOS.init({
        once: true,
      });

    return (
        <Container className='cs-h d-flex flex-column align-items-center justify-content-center'>
            <Container data-aos="flip-left" data-aos-duration="800" data-aos-delay="200" className='text-center px-5 py-5 cs-w cs-tc cs-bg d-flex flex-column align-items-center gap-3 rounded'>
                <Image fluid data-aos="zoom-in" data-aos-delay="600" src={ImgAva} alt='avatar' className='w-25' roundedCircle />
                <h1 data-aos="zoom-in-up" data-aos-delay="700" className='h2 m-0 cs-fw-6'>Jessica Randall</h1>
                <h2 data-aos="zoom-in-up" data-aos-delay="800" className='cs-tc-2 h6 m-0 cs-fw-6'>London, United Kingdom</h2>
                <p data-aos="zoom-in-up" data-aos-delay="900" className='fs-6 mt-3 cs-fw-4'>"Front-end developer and avid reader."</p>
                <div data-aos="fade-right" data-aos-delay="1000" className='w-100'>
                    <Button  className='py-2 w-100 cs-fw-6 border-0 cs-btn'>GitHub</Button>
                </div>
                <div data-aos="fade-left" data-aos-delay="1200" className='w-100'>
                    <Button className='py-2 w-100 cs-fw-6 border-0 cs-btn'>Frontend Mentor</Button>
                </div>
                <div data-aos="fade-right" data-aos-delay="1400" className='w-100'>
                    <Button className='py-2 w-100 cs-fw-6 border-0 cs-btn'>LinkedIn</Button>
                </div>
                <div data-aos="fade-left" data-aos-delay="1600" className='w-100'>
                    <Button className='py-2 w-100 cs-fw-6 border-0 cs-btn'>Twitter</Button>
                </div>
                <div data-aos="fade-right" data-aos-delay="1800" className='w-100'>
                    <Button className='py-2 w-100 cs-fw-6 border-0 cs-btn'>Instagram</Button>
                </div>
            </Container>
        </Container>
    );
};

export default LinksPage;