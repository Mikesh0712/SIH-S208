// import React from 'react'
// import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import "./Styles/NavBar.css"

// const NavBar = () => {
//     return (
//         <div>
//             <Navbar
//                 expand="lg"
//                 className="shadow-sm py-2"
//                 id='bg'
//                 style={{
//                     background: 'linear-gradient(90deg, #38c172 0%, #4f8cff 100%)',
//                     boxShadow: '0 2px 16px rgba(56,193,114,0.10)',
//                     border: '1px solid #38c172',
//                     minHeight: '56px'
//                 }}
//                 variant="dark"
//                 sticky="top"
//             >
//                 <Container fluid>
//                     {/* Logo on the extreme left */}
//                     <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-auto">
//                         <img
//                             src="images/logo.jpg"
//                             alt="AgriConnect Logo"
//                             width="44"
//                             height="44"
//                             className="me-2"
//                             style={{
//                                 borderRadius: '50%',
//                                 border: '2px solid #fff',
//                                 boxShadow: '0 1px 6px #38c17233'
//                             }}
//                         />
//                         <span style={{ color: '#2E7D32', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>Kishan</span>
//                         <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>Sakhi</span>
//                     </Navbar.Brand>

//                     <Navbar.Toggle aria-controls="navbar-nav" />

//                     <Navbar.Collapse id="navbar-nav" className="justify-content-end">
//                         <Nav className="align-items-center d-flex gap-2">
//                             <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
//                             <Nav.Link as={Link} to="/buy" className="nav-link-custom">Buy</Nav.Link>
//                             <Nav.Link as={Link} to="/sell" className="nav-link-custom">Sell</Nav.Link>
//                             <Nav.Link as={Link} to="/cropadvisor" className="nav-link-custom">CropAdvisor</Nav.Link>
//                             <Nav.Link as={Link} to="/weather" className="nav-link-custom">Weather</Nav.Link>
//                             <Nav.Link as={Link} to="/livemarketprice" className="nav-link-custom">LiveMarketPrice</Nav.Link>
//                             <Nav.Link as={Link} to="/learn" className="nav-link-custom">Learn</Nav.Link>

//                             {/* Language Toggle */}
//                             <Dropdown className="ms-2">
//                                 <Dropdown.Toggle className='gradient-btn'>
//                                     EN
//                                 </Dropdown.Toggle>
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item>ENGLISH</Dropdown.Item>
//                                     <Dropdown.Item>हिन्दी</Dropdown.Item>
//                                     <Dropdown.Item>ଓଡ଼ିଆ</Dropdown.Item>
//                                     <Dropdown.Item>മലയാളം</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                             {/* Auth Buttons */}
//                             <Button as={Link} to="/login" variant="success" className="ms-2 gradient-btn">Login</Button>
//                             <Button as={Link} to="/signup" variant="success" className="ms-1 gradient-btn">Sign Up</Button>
//                             <Dropdown className="ms-2">
//                                 <Dropdown.Toggle className="gradient-btn">Profile</Dropdown.Toggle>
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
//                                     <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
//                                     <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             <style>{`
//                 .nav-link-custom {
//                     color: #fff !important;
//                     font-weight: 500;
//                     font-size: 1.07rem;
//                     padding: 0.35rem 1.1rem;
//                     border-radius: 0 !important;
//                     transition: background 0.18s, color 0.18s, box-shadow 0.18s;
//                 }
//                 .nav-link-custom:hover, .nav-link-custom:focus {
//                     background: #fff2;
//                     color: #000 !important;
//                     box-shadow: 0 2px 8px #38c17222;
//                     text-decoration: none;
//                 }
//                 .gradient-btn {
//                     background: linear-gradient(90deg, #38c172 60%, #4f8cff 100%);
//                     color: #fff !important;
//                     border: none;
//                     font-weight: 600;
//                     border-radius: 0 !important;
//                     box-shadow: 0 2px 8px #4f8cff22;
//                     transition: background 0.18s, color 0.18s;
//                 }
//                 .gradient-btn:hover, .gradient-btn:focus {
//                     background: linear-gradient(90deg, #4f8cff 60%, #38c172 100%);
//                     color: #fff !important;
//                 }
//             `}</style>
//         </div>
//     )
// }

// export default NavBar;
import React from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Styles/NavBar.css"

const NavBar = () => {
    return (
        <div>
            <Navbar
                expand="lg"
                className="shadow-sm py-2"
                id='bg'
                style={{
                    background: 'linear-gradient(90deg, #38c172 0%, #4f8cff 100%)',
                    boxShadow: '0 2px 16px rgba(56,193,114,0.10)',
                    border: '1px solid #38c172',
                    minHeight: '56px'
                }}
                variant="dark"
                sticky="top"
            >
                <Container fluid>
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-auto">
                        <img
                            src="images/logo.jpg"
                            alt="AgriConnect Logo"
                            width="44"
                            height="44"
                            className="me-2"
                            style={{
                                borderRadius: '50%',
                                border: '2px solid #fff',
                                boxShadow: '0 1px 6px #38c17233'
                            }}
                        />
                        <span style={{ color: '#2E7D32', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>Kishan</span>
                        <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>Sakhi</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center d-flex gap-2">
                            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/buy" className="nav-link-custom">Buy</Nav.Link>
                            <Nav.Link as={Link} to="/sell" className="nav-link-custom">Sell</Nav.Link>
                            <Nav.Link as={Link} to="/cropadvisor" className="nav-link-custom">CropAdvisor</Nav.Link>
                            <Nav.Link as={Link} to="/weather" className="nav-link-custom">Weather</Nav.Link>
                            <Nav.Link as={Link} to="/livemarketprice" className="nav-link-custom">LiveMarketPrice</Nav.Link>
                            <Nav.Link as={Link} to="/learn" className="nav-link-custom">Learn</Nav.Link>

                            {/* Language Toggle */}
                            <Dropdown className="ms-2">
                                <Dropdown.Toggle className='gradient-btn'>
                                    EN
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>ENGLISH</Dropdown.Item>
                                    <Dropdown.Item>हिन्दी</Dropdown.Item>
                                    <Dropdown.Item>ଓଡ଼ିଆ</Dropdown.Item>
                                    <Dropdown.Item>മലയാളം</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* Auth Buttons */}
                            <Button as={Link} to="/login" variant="success" className="ms-2 gradient-btn">Login</Button>
                            <Button as={Link} to="/signup" variant="success" className="ms-1 gradient-btn">Sign Up</Button>
                            <Dropdown className="ms-2">
                                <Dropdown.Toggle className="gradient-btn">Profile</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Beautified Styles */}
            <style>{`
                .nav-link-custom {
    color: #fff !important;
    font-weight: 500;
    font-size: 1.05rem;
    padding: 0.35rem 1rem;
    border-radius: 50px !important;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
}

.nav-link-custom:hover, 
.nav-link-custom:focus {
    background: #fff !important;   /* White box on hover */
    color: #2E7D32 !important;     /* Green text inside */
    border: 1px solid #38c172;     /* Green border */
    box-shadow: 0 0 10px rgba(56,193,114,0.35);
    text-decoration: none;
}

.gradient-btn {
    background: linear-gradient(90deg, #38c172 60%, #4f8cff 100%);
    color: #fff !important;
    border: none;
    font-weight: 600;
    border-radius: 50px !important;
    padding: 0.35rem 1rem;
    box-shadow: 0 2px 6px #4f8cff33;
    transition: all 0.25s ease-in-out;
}

.gradient-btn:hover, 
.gradient-btn:focus {
    background: #fff !important;   /* White box on hover */
    color: #4f8cff !important;     /* Blue text inside */
    border: 1px solid #4f8cff;     /* Blue border */
    box-shadow: 0 0 10px rgba(79,140,255,0.35);
}

.dropdown-menu {
    border-radius: 12px;
    overflow: hidden;
    border: none;
    box-shadow: 0 4px 18px rgba(0,0,0,0.15);
}

.dropdown-item:hover {
    background: #fff !important;
    color: #38c172 !important;
}

            `}</style>
        </div>
    )
}

export default NavBar;
