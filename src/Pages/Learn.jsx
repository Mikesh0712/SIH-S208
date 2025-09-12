import React, { useState } from 'react';
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import CarouselSection from '../Components/CarouselSection';
import ModuleCard from '../Components/ModuleCard';
import ExpertTipCard from '../Components/ExpertTipCard';
import AddModuleForm from '../Components/AddModuleForm';
import EditModuleForm from '../Components/EditModuleForm';
import "./style/Learn.css";

const Learn = () => {
  const [modules, setModules] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addModule = (newModule) => {
    setModules(prev => [...prev, newModule]);
  };

  const deleteModule = (index) => {
    setModules(prev => prev.filter((_, i) => i !== index));
  };

  const editModule = (index, updatedModule) => {
    setModules(prev =>
      prev.map((mod, i) => (i === index ? updatedModule : mod))
    );
    setEditingIndex(null);
  };

  return (
    <div>
      <Container fluid className="learn-page">
        {/* Carousel or Featured Content */}
        <CarouselSection />

        {/* Category Strip */}
        <Row className="px-3 mb-4">
          <Col>
            <div
              className="d-flex flex-wrap align-items-center justify-content-between p-4 rounded-4 shadow-sm"
              style={{
                background: "linear-gradient(90deg, #e3f0ff 60%, #f8fafc 100%)",
                border: "1.5px solid #e3e7ed",
                minHeight: 80,
                marginBottom: 10
              }}
            >
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <i className="bi bi-search text-primary fs-3 me-3"></i>
                <Form.Control
                  type="text"
                  placeholder="Search farming techniques, modules, or topics..."
                  className="me-3"
                  style={{ maxWidth: 320, minWidth: 200, background: "#fafdff", borderColor: "#b6d0f7" }}
                />
              </div>
              <div className="d-flex gap-3">
                <Dropdown>
                  <Dropdown.Toggle variant="outline-primary" className="fw-semibold">
                    <i className="bi bi-translate me-1"></i> Language
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Odia</Dropdown.Item>
                    <Dropdown.Item>Hindi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-success" className="fw-semibold">
                    <i className="bi bi-bar-chart-steps me-1"></i> Level
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Beginner</Dropdown.Item>
                    <Dropdown.Item>Advanced</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>

        {/* Add Module Form */}
        <Row className="px-3 justify-content-center">
          <Col md={10} lg={8} xl={7}>
            <div
              className="p-5 mb-5 shadow rounded-4 border"
              style={{
                backgroundImage: `url("https://www.shutterstock.com/image-photo/lush-rice-paddy-field-neat-600nw-2499404003.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1.5px solid #e3e7ed",
                boxShadow: "0 6px 32px rgba(79,140,255,0.10)",
                transition: "box-shadow 0.2s",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* White overlay for better readability */}
              <div
                style={{
                  background: "rgba(255,255,255,0.85)",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      background: "linear-gradient(135deg, #4f8cff 60%, #38c172 100%)",
                      borderRadius: "50%",
                      width: 54,
                      height: 54,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 20,
                      boxShadow: "0 2px 12px rgba(79,140,255,0.18)",
                      border: "3px solid #fff"
                    }}
                  >
                    <i className="bi bi-journal-plus text-white fs-2"></i>
                  </div>
                  <div>
                    <h3 className="mb-0 text-primary fw-bold">Add a New Learning Module</h3>
                    <div className="text-muted" style={{ fontSize: "1.05rem" }}>
                      Share your expertise and help others grow!
                    </div>
                  </div>
                </div>
                <div className="mb-4" style={{ fontSize: "1.08rem", color: "#4f5d75" }}>
                  Fill out the form below to contribute a new learning module to the community. Your knowledge can make a difference.
                </div>
                <div className="bg-light rounded-3 p-4 shadow-sm border" style={{ borderColor: "#e3e7ed" }}>
                  <AddModuleForm onAdd={addModule} />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Modules */}
        <Row className="px-3">
          {modules.map((module, idx) => (
            <Col md={4} key={idx}>
              {editingIndex === idx ? (
                <EditModuleForm
                  initialData={module}
                  onSave={(updated) => editModule(idx, updated)}
                  onCancel={() => setEditingIndex(null)}
                />
              ) : (
                <ModuleCard
                  {...module}
                  onDelete={() => deleteModule(idx)}
                  onEdit={() => setEditingIndex(idx)}
                />
              )}
            </Col>
          ))}
        </Row>

        {/* Expert Tips Section */}
        <h4 className="mt-5 px-3">Insights from Agricultural Experts</h4>
        <Row className="px-3 mb-4">
          <Col md={4}><ExpertTipCard /></Col>
          <Col md={4}><ExpertTipCard /></Col>
          <Col md={4}><ExpertTipCard /></Col>
        </Row>

        {/* Progress Tracker */}
        <Row className="px-3 mb-5">
          <Col><Form.Check type="checkbox" label="Soil Basics" defaultChecked /></Col>
          <Col><Form.Check type="checkbox" label="Pest Control" /></Col>
          <Col><Form.Check type="checkbox" label="Irrigation" /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Learn;
