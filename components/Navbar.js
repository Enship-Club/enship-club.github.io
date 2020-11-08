import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css';

export default function CustomNavbar() {
	return (
		<>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className={styles.navbar}>
		<Link href="/"><Navbar.Brand>Enship</Navbar.Brand></Link>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
		<Nav className="mr-auto">
		<Nav.Link href="/">Home</Nav.Link>
		<Nav.Link href="/about">About</Nav.Link>
		<Nav.Link href="/faculty">Faculty</Nav.Link>
		<Nav.Link href="/members">Members</Nav.Link>
		<Nav.Link href="/alumni">Alumni</Nav.Link>
		<Nav.Link href="/members">Members</Nav.Link>
		<Nav.Link href="/events">Events</Nav.Link>
		</Nav>
		<Nav>
		<Nav.Link href="/contact"><Button variant="outline-light">Contact Us</Button></Nav.Link>
		</Nav>
		</Navbar.Collapse>
		</Navbar>
		</>
	)
}

