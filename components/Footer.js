import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  var bottomValue = null;
  if (router.pathname === "/faculty" || router.pathname === "/events") {
    var bottomValue = "0px";
  }
  return (
    <div className="footer" style={{ bottom: bottomValue }}>
      <Row>
        <Col sm={5}>
          <p>
            &copy; Enship - The Entrepreneurship Club of Delhi Public School,
            R.K. Puram
          </p>
        </Col>
        <Col sm={7} style={{ textAlign: "right" }}>
          <ul class="contacts">
            <a href="mailto:enship@dpsrkp.net" target="_blank">
              <li style={{ margin: "10px" }}>
                <i class="fas fa-at"></i>
              </li>
            </a>
            <a href="https://www.facebook.com/enshipdpsrkp/" target="_blank">
              <li style={{ margin: "10px" }}>
                <i class="fab fa-facebook"></i>
              </li>
            </a>
            <a href="https://www.instagram.com/enshipclub/" target="_blank">
              <li style={{ margin: "10px" }}>
                <i class="fab fa-instagram"></i>
              </li>
            </a>
          </ul>
        </Col>
      </Row>
      <style jsx>{`
        .footer {
          background-color: #000;
          /* height:360px; */
          padding: 20px;
          // bottom: 0px;
          color: #ffffff;
          position: absolute;
          width: 100%;
          height: 72px;
        }

        .footer > a,
        li,
        ul {
          color: #ffffff;
        }

        .footer > li,
        ul {
          list-style-type: none;
          display: inline;
        }

        .contacts {
          color: #fff;
        }

        .contacts > ul,
        li {
          color: #fff;
          padding: 0px;
          margin: 0px;
          display: inline;
        }
      `}</style>
    </div>
  );
}
