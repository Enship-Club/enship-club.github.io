import { Col, Row } from "react-bootstrap";
import MemberCard from "./MemberCard";
import styles from './MemberSection.module.css';

export default function MemberSection({ standard, students }) {
	return (
			<div className={styles.section}>
			<h2 style={{textAlign: "center", margin: "40px 0"}}>{standard}</h2>
			<Row style={{justifyContent: "center"}}>
			{students.map(member => (
					<MemberCard name={member.name} post={member.post} />
			))}
			</Row>
			</div>
	)
}
