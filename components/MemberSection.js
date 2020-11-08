import { Col, Row } from "react-bootstrap";
import MemberCard from "./MemberCard";

export default function MemberSection({ standard, students }) {
	return (
			<div>
			<h2 style={{textAlign: "center"}}>Class {standard}</h2>
			<Row style={{justifyContent: "center"}}>
			{students.map(member => (
					<MemberCard name={member.name} post={member.post} />
			))}
			</Row>
			</div>
	)
}
