import React from 'react';
// import { Grid, Row, Col } from './ClientsStyle';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import "./Clients.css"

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/ClientLogos', false, /\.(png|jpe?g)$/));

export default function Clients() {
    return (
        <MDBContainer>
            <MDBRow center style={{ textAlign: "center" }}>
                <h1 className="clients-title">
                    <span className="base-orange-text">
                        Nossos Clientes
                    </span>
                </h1>
            </MDBRow>
            <MDBRow center>
                <MDBCol className="client-image" size={3}>
                    <span><img src={images[0]} className="img-fluid" alt="" /></span>
                </MDBCol>
                <MDBCol className="client-image" size={3}>
                    <img src={images[1]} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol className="client-image" size={3}>
                    <img src={images[2]} className="img-fluid" alt="" />
                </MDBCol>
            </MDBRow>
            <MDBRow center>
                <MDBCol className="client-image" size={3}>
                    <img src={images[3]} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol className="client-image" size={3}>
                <img src={images[4]} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol className="client-image" size={3}>
                    <img src={images[5]} className="img-fluid" alt="" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}