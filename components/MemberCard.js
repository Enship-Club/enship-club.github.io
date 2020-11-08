import {Col} from 'react-bootstrap';
import styles from './MemberCard.module.css';

export default function MemberCard({ name, post }) {
	return (
			<Col xs={3} className={styles.memberCard}>
			<div className="text">
			<div className="name"><strong>{name}</strong></div>
			<div className="post">{post}</div>
			</div>
			</Col>
	)
}
