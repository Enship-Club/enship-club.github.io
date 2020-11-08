import {Col} from 'react-bootstrap';

export default function MemberCard({ name, post }) {
	return (
			<Col xs={3} >
			<div className="text">
			<div className="name"><strong>{name}</strong></div>
			<div className="post">{post}</div>
			</div>
			</Col>
	)
}
