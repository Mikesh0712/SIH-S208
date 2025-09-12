import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaCommentDots } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #1B5E20 60%, #388e3c 100%)',
        color: '#fff',
        paddingTop: '2.5rem',
        paddingBottom: '1.5rem',
        marginTop: '4rem',
        borderTopLeftRadius: '2.5rem',
        borderTopRightRadius: '2.5rem',
        boxShadow: '0 -2px 24px rgba(34, 139, 34, 0.12)'
      }}
    >
      <Container>
        <Row className="text-center mb-3">
          <Col>
            <h4 className="fw-bold mb-2" style={{ letterSpacing: '1px' }}>
              <FaLeaf className="me-2 text-success" style={{ filter: 'drop-shadow(0 0 2px #fff)' }} />
              KishanSakhi
            </h4>
            <p className="mb-1" style={{ fontSize: '1.08rem', opacity: 0.92 }}>
              Empowering Farmers with Technology
            </p>
            <p className="mb-0" style={{ fontSize: '0.98rem', opacity: 0.85 }}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-2">
          <Col md="auto">
            <div
              className="bg-white rounded-pill px-4 py-2 shadow-sm text-center d-inline-block"
              style={{
                minWidth: 0,
                border: '1.5px solid #38c172',
                boxShadow: '0 2px 12px rgba(56,193,114,0.10)'
              }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiJSkF0eQDOUeAJE1ZB_rBmBgzG2iKMrIqw9konH__c2ERig/viewform?usp=sharing&ouid=115224532837796059183"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success fw-semibold px-4 py-2"
                style={{
                  fontSize: '1.08rem',
                  borderRadius: '2rem',
                  boxShadow: '0 1px 6px rgba(56,193,114,0.08)'
                }}
              >
                <FaCommentDots className="me-2" />
                Give Feedback
              </a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p className="fst-italic mb-1" style={{ fontSize: '1.05rem', color: '#c8e6c9' }}>
              “Jai Jawan, Jai Kisan.” ~ Lal Bahadur Shastri
            </p>
            <p className="fst-italic" style={{ fontSize: '1.04rem', color: '#b2dfdb' }}>
              “Sowing innovation, harvesting impact.”
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;