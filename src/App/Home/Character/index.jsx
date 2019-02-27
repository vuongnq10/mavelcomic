import T from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Card from 'react-bootstrap/Card';

import styles from './styles.css';

const Index = ({ id, name, thumbnail, description }) => (
  <div className={styles.padding}>
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-lg-3 col-12">
            <Link to={`/hero/${id}`}>
              <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="img-thumbnail" />
            </Link>
          </div>
          <div className="col-lg-9 col-12">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description || 'N/A'}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
);

Index.propTypes = {
  id: T.number.isRequired,
  name: T.string.isRequired,
  thumbnail: T.shape({}).isRequired,
  description: T.string.isRequired,
};

export default Index;
