import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const DetailCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="Profile Pic"
        />
        <CardTitle className="text-primary">
          <h3>
            <span className="pr-2">{details.name?.title}</span>
            <span className="pr-2">{details.name?.first}</span>
            <span className="pr-2">{details.name?.last}</span>
          </h3>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
          <p>{details.phone}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default DetailCard;
