import { Container } from "react-bootstrap";
import faculty from "../data/faculty";
import MemberSection from "../components/MemberSection";

export default function Members() {
  return (
    <Container>
      {faculty.map((facultySection) => (
        <>
          <MemberSection
            standard={facultySection.section}
            students={facultySection.faculties}
          />
        </>
      ))}
    </Container>
  );
}
