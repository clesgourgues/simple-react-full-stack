import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';

const MapIcon = ({ name }) => (
  <>
    <Badge color="secondary">{name}</Badge>
    <FontAwesomeIcon icon="plane" />
  </>
);

export default MapIcon;
