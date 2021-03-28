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

import backgroungImage from '../../assets/Footer/footer-background.png';
import { Image } from "react-bootstrap";

const Footer = () => {
    return (
        <Box style={{ background: backgroungImage, position: "relative" }}>
            <div style={{ width: "100%", height: "100%", opacity: 0.7, position: "absolute", zIndex: -2 }}>
                <Image src={backgroungImage} style={{ width: "100%", height: "100%" }}></Image>
            </div>
            <div style={{
                width: "100%", height: "100%", opacity: 0.6, 
                position: "absolute",
                zIndex: -1,
                backgroundColor: "black"
            }}>

            </div>
            <Container>
                <Row className='row'>
                    <Column className="col-2">
                        <Heading>Sobre Nós</Heading>
                        <FooterLink href="#">Empresa</FooterLink>
                    </Column>
                    <Column className="col-3">
                        <Heading>Serviços</Heading>
                        <FooterLink href="#">Wire-O</FooterLink>
                        <FooterLink href="#">Espirais de Aço</FooterLink>
                        <FooterLink href="#">Espirais de PVC</FooterLink>
                    </Column>
                    <Column className="col-3">
                        <Heading>Contato</Heading>
                        <FooterItem>veredaacabementos@vereda.com.br</FooterItem>
                        <FooterItem>Telefones:11 3858-2359<br></br>11 2501-0882<br></br>
                            <a href="https://wa.me/+5511974685433">
                                WhatsApp</a>
                        </FooterItem>
                    </Column>
                    <Column className="col-3">
                        <Heading>Localização</Heading>
                        <FooterItem>Rua Félix Guilhem, 940<br></br>
                        Lapa de Baixo<br></br>
                        São Paulo-SP <br></br>
                        Cep: 05069-000
                        </FooterItem>
                    </Column>
                    <Column className="col-1">
                        <Heading>Siga-nos</Heading>
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