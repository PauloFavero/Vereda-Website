// import React from 'react';
// import {Grid, Row, Col} from 'react-bootstrap';
// export default function Footer() {
//     return (
//         <div style={{backgroundColor:'#e4482e', bottom:'0px', position:'absolute', width: '100%', height:'100px'}}>
//             {
//             // <Row>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>af
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'white'}}>asdfghjkqwertyuiopl
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>k
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'white'}}>k
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>j
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'white'}}>h
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>g
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'white'}}>i

//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>
//             //         asd
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'white'}}>
//             //     i
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'black'}}>
//             //     b
//             //     </Col>
//             //     <Col sm={1} style={{backgroundColor:'red'}}>
//             //     f
//             //     </Col>
//             // </Row>

//             }
//                 Footer Infos
//         </div>
//     );
// }

import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    FooterItem,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Sobre Nós</Heading>
                        <FooterLink href="#">Empresa</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Serviços</Heading>
                        <FooterLink href="#">Wire-O</FooterLink>
                        <FooterLink href="#">Espirais de Aço</FooterLink>
                        <FooterLink href="#">Espirais de PVC</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contate nos</Heading>
                        <FooterItem>veredaacabementos@vereda.com.br</FooterItem>
                        <FooterItem>Telefones:11 3858-2359
                            {
                            /* <ul>11 3858-2359</ul>
                            <ul>11 2501-0882</ul>
                            <ul>11 97468-5433 (WhatsApp)</ul> */
                            }
                        </FooterItem>
                        <FooterItem>Rua Félix Guilhem, 940 Lapa de Baixo - São Paulo-SP Cep: 05069-000</FooterItem>
                        <FooterLink href="https://br.linkedin.com/company/vereda-acabamentos-gr%C3%A1ficos">
                            <i className="fab fa-linkedin">
                                <span style={{ marginLeft: "0px" }}>
                                    LinkedIn
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;