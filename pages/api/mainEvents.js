const mainEvents = [
	{
		heading: "Group Discussion",
		body: "Group discussion is an event that mainly tests participants’ problem solving and spontaneous thinking abilities. Participants have a round table discussion/debate on a topic that is provided to them on the spot. The participants are given up to five minutes to generate their arguments and prepare for the debate. They are open to present their stance in an introductory opening statement. It should be noted that this is more of a civilized discussion than an aggressive MUN-type heated debate. The participants are then free to discuss the topic, presenting their arguments one after the other. The ability to analyze and find flaws in the opponent’s logic on the spot is essential to ensure victory. They are entirely responsible for the flow of the discussion. Moderators are simply present to ensure that participants adhere to the rules."
	},
	{
		heading: "Ad-Making",
		body: "Ad-making tests the creativity of participants but moreso, their ability to catch the eye of their target consumers: good marketing and advertising is key in running a successful business. Although the designing potential/ skill of teams will be judged to great extent, what will also be tested is how they are able to relate to the concept of a good advert on an entrepreneurial level - What strategies are they using to ensure that this ad makes them money? Is the ad efficient in presenting the purpose of their product? Teams will require prerequisite knowledge of software such as Photoshop; this event does not make use of physical papers and color pencils !"
	},
	{
		heading: "Quiz",
		body: "A test of not just bookish knowledge but of speed , wits and street smarts, the entrepreneurship quiz assesses the participants knowledge of the real world of pioneerdom and the ability to which one can apply it. Participants must clear several rounds evaluating various aspects of not just the world of entrepreneurship but business and commerce."
	},
	{
		heading: "Business Plan",
		body: "The business plan event is the Enship’s flagship event. It requires teams to formulate proper, applicable business plans with the required statistics, which will be assessed by a team of judges. This is followed by a final round where selected teams need to present their business ideas via a thought out presentation at the official enship event. A variety of criteria will be used to judge each pitch ranging from innovation to market research, to name a few. At the end, three winning teams (ranked first, second, and third) will walk away with pride."
	},
	{
		heading: "Surprise",
		body: "The surprise event is as fun as it gets: Each year, participating teams will be surprised with a unique and interesting event that will test entrepreneurial skills in creative, non-traditional ways. There will be 2-3 rounds with each round being different and challenging in its own way. While the surprise event is often regarded as more of a game, it should not be forgotten that participants must be prepared for anything - literally. Winning this event requires a certain level of mental preparedness and spontaneous thinking."
	}
]

export default function handler(req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(mainEvents))
}
