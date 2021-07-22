import { Col, Container, Row, Table } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div className="header">
        <h1>About Us</h1>
        <p>
          Enship - The Entrepreneurship Club of Delhi Public School, R.K. Puram
        </p>
      </div>
      <div className="content">
        <div className="enship">
          <Container>
            <Row>
              <Col sm={4} md={8} lg={8}>
                <h3>What is Enship?</h3>
                <p>
                  <strong>ENSHIP</strong>, The Entrepreneurship club of Delhi
                  Public School R.K.Puram, established in 2017, seeks young
                  minds who think out of the box.
                  <br /> We believe that strategic thinking and the ability of
                  continual learning are key entrepreneurial skills and also
                  very valuable life skills.The club offers to its members with
                  the right mentorship and guidance to be able to see their
                  ideas come to life. <br />
                  ENSHIP’s aim is to provide budding student entrepreneurs with
                  a platform where they can learn more about entrepreneurship,
                  interact with real life entrepreneurs, get the right
                  mentorship and support for their idea and finally be able to
                  execute it, potentially changing the course of their journey.
                </p>
              </Col>
              <Col sm={4} md={4} lg={4} style={{ textAlign: "right" }}>
                <img src="questionmark.jpg" alt="" height="200" width="200" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="event">
          <Container>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <img src="event.jpg" alt="" height="200" width="300" />
              </Col>
              <Col sm={4} md={8} lg={8}>
                <p>
                  The Entrepreneurship Club has successfully held its annual
                  ENSHIP Event for the past three years. With participation from
                  over 50 schools from the NCR every year. It comprises of five
                  competitions: Business Plan, Ad Making, Group Discussion, Quiz
                  and a Surprise Event, which are judged by successful
                  entrepreneurs and alumni of our very own club. It evaluates
                  the creativity and originality of the young blossoming minds
                  by asking them to present diverse and innovative ideas.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="event-history">
          <Container>
            <Row>
              <Col sm={12} style={{ textAlign: "center" }}>
                <h3>Event History</h3>
                <Table variant="dark">
                  <thead>
                    <tr>
                      <th scope="col">Event</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Enship 2020</td>
                      <td>TBD...</td>
                    </tr>
                    <tr>
                      <td>Enship 2019</td>
                      <td>10 August 2019</td>
                    </tr>
                    <tr>
                      <td>Enship 2018</td>
                      <td>14 July 2018</td>
                    </tr>
                    <tr>
                      <td>Enship 2017</td>
                      <td>5 August 2017</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <style jsx>{`
        .header {
          padding: 60px;
          text-align: center;
          background: #000;
          color: white;
          font-size: 30px;
        }

        .enship {
          padding: 10px;
          margin-bottom: 20px;
          background-color: #f1f1f1;
          font-size: 18px;
        }

        .event {
          padding: 20px;
          font-size: 18px;
        }

        .event-history {
          color: #fff;
          padding: 20px;
          background-color: #343a40;
        }

        .enship h3,
        .event h3 {
          margin: 20px 0;
        }
      `}</style>
    </>
  );
}
