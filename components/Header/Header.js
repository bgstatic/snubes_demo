import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, } from 'react-bootstrap'
import useWindowDimensions from '../../utils/useWindowDimensions'
import { navigation } from '../../const/layout-data'
import * as styles from './header.module.scss'

const Header = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
    const NAVBAR_ALIGN = 990;
    const windowDimensions = useWindowDimensions();

    return (
        <Navbar expand="lg" className={styles.header} variant="dark">
            <Container fluid={windowDimensions?.innerWidth <= NAVBAR_ALIGN} className={styles.container}>
                <Link href={'/'}>
                    <Navbar.Brand>
                        <img src={windowDimensions?.innerWidth <= NAVBAR_ALIGN ? "/images/components/Navbar/snubes-logo-mobile.svg" : "/images/components/Navbar/snubes-logo.svg"} alt="Snubes" className={styles.logo} />
                    </Navbar.Brand>
                </Link>
                <nav className={styles.navigation}>
                    <Container className="d-none d-md-flex align-items-center" as="ul">
                        {navigation.map((item) => (
                            item.isDropdown ? (
                                <li key={item.url} className={styles.navDropdown}>
                                    <NavDropdown title={item.label} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                            ) :
                                (<li
                                    key={item.url}
                                >
                                    <Link href={item.url}>
                                        {item.label}
                                    </Link>
                                </li>)
                        ))}
                    </Container>
                </nav>
                <Navbar.Toggle
                    aria-controls="offcanvasNavbar"
                    onClick={() => setToggleMobileMenu(true)}
                />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={toggleMobileMenu}
                >
                    <Offcanvas.Header
                        closeButton
                        onHide={() => setToggleMobileMenu(false)}
                    >
                        <Offcanvas.Title
                            id="offcanvasNavbarLabel"
                            className={styles.mobileNavTitle}
                        >
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.offCanvas}>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {navigation.map((item) => (
                                item.isDropdown ? (
                                    <li key={item.url} className={styles.navDropdown}>
                                        <Link href={item.url} className={styles.mobileNavItems}>
                                            <NavDropdown title={item.label} className={styles.mobileNavDropdown} id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                                            </NavDropdown>
                                        </Link>

                                    </li>
                                ) :
                                    (<li
                                        key={item.url}
                                    >
                                        <Link href={item.url} className={styles.mobileNavItems}>
                                            {item.label}
                                        </Link>
                                    </li>)
                            ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}

export default Header