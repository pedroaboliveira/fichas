import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const CardView = ({ dados, campoTitulo, campoTexto }) => {
  if (!dados || dados.length === 0) return <p>Sem dados para apresentar.</p>;

  return (
    <Row>
      {dados.map((item, index) => (
        <Col sm="6" md="4" key={index} className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{item[campoTitulo]}</CardTitle>
              <CardText>{item[campoTexto]}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardView;