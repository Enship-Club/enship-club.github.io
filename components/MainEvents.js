import { Row, Container, Col } from "react-bootstrap";
import MainEventCard from "./MainEventCard";
import mainEvents from "../data/mainEvents";

export default function MainEvents() {
  return (
    <div style={{ marginTop: "32px" }}>
      <Container>
        <h3 style={{ textAlign: "center" }}>Main Events</h3>
        <Row style={{ marginTop: "32px" }}>
          {mainEvents.map((event) => (
            <Col
              style={{ padding: "0 4px", marginBottom: "8px" }}
              sm={12}
              md={4}
            >
              <MainEventCard
                key={mainEvents.indexOf(event)}
                heading={event.heading}
                body={event.body}
                modalBody={event.modalBody}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
