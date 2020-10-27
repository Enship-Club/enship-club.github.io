const members = [
	{
		standard:"12",
		students: [
			{
				name: "Avikam Mangla",
				post: "President"
			},
			{
				name: "Vansh Tyagi",
				post: "Vice President"
			},
			{
				name: "Radhika Gupta",
				post: "Vice President"
			},
			{
				name: "Jasmer Singh Arora",
				post: "Member"
			},
			{
				name: "Vinayak Aggarwal",
				post: "Member"
			},
			{
				name: "Siddharth Arya",
				post: "Member"
			},
			{
				name: "Ilina Arya",
				post: "Member"
			},
			{
				name: "Priyanshi Ahuja",
				post: "Member"
			},
			{
				name: "Gurnika Kaur",
				post: "Member"
			},
			{
				name: "Adi Singh",
				post: "Member"
			},
			{
				name: "Aryaman Aggarwal",
				post: "Member"
			},
			{
				name: "Mahira Jain",
				post: "Member"
			},
		]
	},
	{
		standard: "11",
		students: [
			{
				name: "Malank Goel",
				post: "Member"
			},
			{
				name: "Aditya Mathur",
				post: "Member"
			},
			{
				name: "Dev Rateria",
				post: "Member"
			},
			{
				name: "Shashwat Raj",
				post: "Member"
			},
			{
				name: "Saathvik Sharma",
				post: "Member"
			},
			{
				name: "Disha Khanna",
				post: "Member"
			},
			{
				name: "Advitya Singhal",
				post: "Member"
			},
			{
				name: "Maanya Sareen",
				post: "Member"
			},
			{
				name: "Vidur Sahni",
				post: "Member"
			},
			{
				name: "Vaishnav Garodia",
				post: "Member"
			},
			{
				name: "SP Thanusree",
				post: "Member"
			},
			{
				name: "Aaryana Khare",
				post: "Member"
			},
			{
				name: "Quilin Talukdar",
				post: "Member"
			},
			{
				name: "Armaan Gulaty",
				post: "Member"
			},
			{
				name: "Tulip Mittal",
				post: "Member"
			},
			{
				name: "Siddhanth Shetty",
				post: "Member"
			},
			{
				name: "Siddhansh Narang",
				post: "Member"
			},
			{
				name: "Krishnna Nayyarr",
				post: "Member"
			},
			{
				name: "Sanya Thakur",
				post: "Member"
			},
			{
				name: "Neasha Mittal",
				post: "Member"
			},
			{
				name: "Aansh Sharma",
				post: "Member"
			},
			{
				name: "Taneesha Daga",
				post: "Member"
			},
			{
				name: "Sanchita kapoor",
				post: "Member"
			},
			{
				name: "Alia Fatima",
				post: "Member"
			},
			{
				name: "Mehak Aggarwal",
				post: "Member"
			},
			{
				name: "Archisha Bansal",
				post: "Member"
			},
			{
				name: "Navya Dewan",
				post: "Member"
			},
			{
				name: "Shaurya Parihar",
				post: "Member"
			},
			{
				name: "Ridhhin Grover",
				post: "Member"
			}
		]
	},
	{
		standard: "10",
		students: [
			{
				name: "Anoushka Jain",
				post: "Member"
			},
			{
				name: "Kavin Desi Valli",
				post: "Member"
			},
			{
				name: "Riaa Sehgal",
				post: "Member"
			},
			{
				name: "Pranav Rajen",
				post: "Member"
			},
			{
				name: "Avihan Jain",
				post: "Member"
			},
			{
				name: "Tanisha Arya",
				post: "Member"
			},
			{
				name: "Tanmay Arora",
				post: "Member"
			},
			{
				name: "Eva Aggarwal",
				post: "Member"
			},
			{
				name: "Suhani Sethi",
				post: "Member"
			},
			{
				name: "Harshita Bose",
				post: "Member"
			},
			{
				name: "Lomash Sharma",
				post: "Member"
			},
			{
				name: "Aarshia Gupta",
				post: "Member"
			},
			{
				name: "Vaibhav S. Mehra",
				post: "Member"
			},
			{
				name: "Srishti Agarwal",
				post: "Member"
			}
		]
	},
	{
		standard: '8',
		students: [
			{
				name: "Ryan Kumar",
				post: "Member"
			}
		]
	}
]

export default function handler(req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(members))
}
