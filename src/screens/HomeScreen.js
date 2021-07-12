import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Surat from "../components/Surat";

const HomeScreen = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				"https://api.npoint.io/99c279bb173a6e28359c/data"
			);
			setData(data);
		};
		fetchData();
	}, []);
	return (
		<>
			<Row>
				{data.map((item) => (
					<Col sm={4}>
						<Link className="link" to={`/surat/${item.nomor}`}>
							<Surat surat={item} />
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
