import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Surat = ({ surat }) => {
	return (
		<Card className="my-3 p-3 surat">
			<Row>
				<Col sm={3}>
					<div as="h6">{surat.nomor}</div>
				</Col>
				<Col sm={5}>
					<div as="h6">{surat.nama} </div>
					<div style={{ fontSize: "12px" }}>{surat.arti} </div>
				</Col>
				<Col sm={4}>
					<div as="h6">{surat.asma}</div>
				</Col>
			</Row>
		</Card>
	);
};

export default Surat;
