const faculty = [
	{
		section: "Faculty",
		faculties: [
			{
				name: "Anjana Virmani",
				post: "Head Teacher"
			}
		]
	}
]

export default function handler(req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(faculty))
}
