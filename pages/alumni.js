import { Container } from "react-bootstrap";
import alumni from "../data/alumni";
import MemberSection from "../components/MemberSection";

export default function Members() {
  return (
    <Container>
      {alumni.map((alumniBatch) => (
        <>
          <MemberSection
            standard={"Batch of " + alumniBatch.batch}
            students={alumniBatch.students}
          />
        </>
      ))}
    </Container>
  );
}
