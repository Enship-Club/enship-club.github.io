import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

export default function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
			<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
			<script src="https://kit.fontawesome.com/a271827d0d.js" crossorigin="anonymous"></script >
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		<title>Enship Official Website</title>
		</Head>
			<Navbar />
			<Component style={{fontFamily: 'IBM Plex Sans', backgroundColor:"#f1f1f1"}} {...pageProps} />
			<Footer />
		</>
	)
}
