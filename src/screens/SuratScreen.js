import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "../components/Loader";

const SuratScreen = ({ match }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				`https://api.npoint.io/99c279bb173a6e28359c/surat/${match.params.id}`
			);
			setData(data);
		};
		getData();
	}, [match]);
	return (
		<>
			<Container>
				{isLoading ? (
					<Loader />
				) : (
					<Row>
						{data.map((item) => (
							<Card className="py-3 p-3 mt-2" key={item.nomor}>
								<Row>
									<Col sm={3}>{item.nomor}</Col>
									<Col sm={9} className="d-flex flex-row-reverse bd-highlight">
										<h4 align="right">{item.ar}</h4>
									</Col>
								</Row>
								<Col>
									<div className="m-2 p-2">
										<cite title="Source Title">Artinya: {item.id}</cite>
									</div>
								</Col>
								<Col>
									<div className="text-center"></div>
								</Col>
							</Card>
						))}
					</Row>
				)}
				;
			</Container>
		</>
	);
};

export default SuratScreen;
