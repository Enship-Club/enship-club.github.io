import { Container } from "react-bootstrap";
import members from "../data/members";
import MemberSection from "../components/MemberSection";

export default function Members() {
  return (
    <Container>
      {members.map((studentClass) => (
        <>
          <MemberSection
            standard={"Class " + studentClass.standard}
            students={studentClass.students}
          />
        </>
      ))}
    </Container>
  );
}
