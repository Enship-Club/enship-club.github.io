import { Container } from "react-bootstrap";
import useSWR from 'swr';

export default function Members() {
  const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR('/api/members', fetcher)
	if (!data) return <div>Loading</div>
		if (error) return <div>error</div>
	return (
		<Container>
      {data.map((studentClass)=> (
					<>
					<h1>{studentClass.standard}</h1>
					<ul>
					{studentClass.students.map(member => (
							<li>{member.name} - {member.post}</li>
					))}
				</ul>
					</>
			))}
		</Container>
	)
}

