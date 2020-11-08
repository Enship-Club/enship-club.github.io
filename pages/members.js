import { Container } from "react-bootstrap";
import useSWR from 'swr';
import MemberSection from '../components/MemberSection';

export default function Members() {
  const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR('/api/members', fetcher)
	if (!data) return <div>Loading</div>
		if (error) return <div>error</div>
	return (
		<Container>
      {data.map((studentClass)=> (
					<>
					<MemberSection standard={studentClass.standard} students={studentClass.students} />
					</>
			))}
		</Container>
	)
}

