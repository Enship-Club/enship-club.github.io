import { Row, Container, Col } from "react-bootstrap";
import MainEventCard from "./MainEventCard";
import mainEvents from "../data/mainEvents";

export default function MainEvents() {
  return (
    <div style={{ margin: "20px 15%" }}>
      <Container>
        {<div>
          <div style={{ display:"flex",marginBottom:"2rem", margin: "10px auto"}}>
            <div style={{margin: "20px auto"}}>
              <h1 style={{marginBottom:"30px",marginTop:"6rem", margin: "20px auto", fontSize: "50px"}}>Events</h1>
            </div>
          </div>
          <div style={{display: "grid",gridGap: "2rem",gridAutoColumns: "1fr",gridTemplateColumns: "repeat(2,1fr)"}}>
          {mainEvents.map((event) => (
              <MainEventCard
                key={mainEvents.indexOf(event)}
                heading={event.heading}
                body={event.body}
                ModalHeading={event.ModalHeading}
                Description={event.Description}
              />
          ))}
          </div>
        </div>}
      </Container>
    </div>
  );
}

