
import React from 'react';
import { Grid, Row, Col, Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import img_1 from '../../assets/produto1.jpg'
import img_2 from '../../assets/produto2.jpg'
import img_3 from '../../assets/produto3.jpg'
import img_4 from '../../assets/produto4.jpg'
// import styles from './CarouselStyle'

export default function CarouselDisplay() {
    return (
        <div style={{justifyContent: 'center', margin:'20px'}}>
            <Row>
                <Col md={{ span: 8, offset: 2 }} style={{ backgroundColor: 'white' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_1}
                                alt="Espirais"
                            />
                            <Carousel.Caption>
                                <h2>Espirais</h2>
                                <h4>Fabricação de espirais plásticos.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_2}
                                alt="Calendários"
                            />

                            <Carousel.Caption>
                                <h2>Calendários</h2>
                                <h4>Fabricação de Wire-o</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_3}
                                alt="Pendentes"
                            />

                            <Carousel.Caption>
                                <h2>Pendentes</h2>
                                <h4>Fabricação de pendentes.</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_4}
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <h2>Empastamento</h2>
                                <h4>Empastamento de Capas</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}