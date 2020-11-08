import { Container } from "react-bootstrap";
import useSWR from 'swr';
import MemberSection from '../components/MemberSection';

export default function Members() {
  const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR('/api/faculty', fetcher)
	if (!data) return <div>Loading</div>
		if (error) return <div>error</div>
	return (
		<Container>
      {data.map((facultySection)=> (
					<>
					<MemberSection standard={facultySection.section} students={facultySection.faculties} />
					</>
			))}
		</Container>
	)
}
