import { Row, Container, Col } from "react-bootstrap";
import MainEventCard from "./MainEventCard";
import mainEvents from "../data/mainEvents";

export default function MainEvents() {
	return (
			<div style={{margin: "20px 15%"}}>
			<Container>
			<h3 style={{textAlign: "center"}}>Main Events</h3>
			<Row>
      {mainEvents.map((event)=> (
					<Col sm={12} md={6}>
					<MainEventCard key={data.indexOf(event)} heading={event.heading} body={event.body} />
					</Col>
			))}
		</Row>
			</Container>
			</div>
	)
}
