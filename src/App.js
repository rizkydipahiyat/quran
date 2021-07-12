import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import SuratScreen from "./screens/SuratScreen";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/surat/:id" component={SuratScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
