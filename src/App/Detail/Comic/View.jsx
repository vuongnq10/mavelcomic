import T from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';

import Spinner from 'components/Spinner';
import styles from './styles.css';

const View = ({ loading, comic }) => (
  !loading ? <div className={styles.padding}>
    <Card>
      <Card.Header>{comic.title}</Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-lg-3 col-12">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="img-thumbnail"
            />
          </div>
          <div className="col-lg-9 col-12">
            <Card.Title>Description</Card.Title>
            <Card.Text>{comic.description || 'N/A'}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div> : <Spinner />
);

View.propTypes = {
  loading: T.bool.isRequired,
  comic: T.shape({
    name: T.string,
  }).isRequired,
};

export default View;
