import { Card } from "react-bootstrap";

export default function MainEventCard({ heading, body }) {
	return (
			<Card style={{padding: '5px', marginBottom: '12px', maxWidth: '490px', height: "100%"}}>
			<Card.Body style={{textAlign: 'center'}}>
			<Card.Title>{heading}</Card.Title>
			<hr />
			<Card.Text>
			{body}
		</Card.Text>
			</Card.Body>
			</Card>
	)
}
