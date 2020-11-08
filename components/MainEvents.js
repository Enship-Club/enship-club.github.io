import { Row, Container, Col } from "react-bootstrap";
import MainEventCard from "./MainEventCard";
import useSWR from 'swr';

export default function MainEvents() {
  const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR('/api/mainEvents', fetcher)
	if (!data) return <div>Loading</div>
		if (error) return <div>error</div>
	return (
			<div style={{margin: "20px 15%"}}>
			<Container>
			<h3 style={{textAlign: "center"}}>Main Events</h3>
			<Row>
      {data.map((event)=> (
					<Col sm={12} md={6}>
					<MainEventCard key={data.indexOf(event)} heading={event.heading} body={event.body} />
					</Col>
			))}
		</Row>
			</Container>
			</div>
	)
}
