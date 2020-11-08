import styles from './StayTuned.module.css';
import Row from 'react-bootstrap/Row';
import { Col, Form, Button } from 'react-bootstrap';

export default function StayTuned() {
	return (
		<div className={styles.stayTuned}>
		<Row style={{textAlign: "center", margin: "20px"}}>
		<Col xs={12}>
		<b><h3>Enship 2020</h3></b>
		<p>Stay Tuned with us</p>
		<Form>
		<Form.Group controlId="formBasicEmail">
		<Row style={{justifyContent: 'center'}}>
		<Col sm={4}>
		<Form.Control type="email" placeholder="Enter your email" required />
		</Col>
		<Col sm={2}>
		<Button variant="outline-light">Stay Tuned!</Button>
		</Col>
		</Row>
		</Form.Group>
		</Form>
		</Col>
		</Row>
		</div>
	)
}
