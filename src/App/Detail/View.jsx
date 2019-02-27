import T from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';

import Spinner from 'components/Spinner';
import Comic from './Comic';
import styles from './styles.css';

const View = ({ loading, hero }) => (
  !loading ? <div className={`container ${styles.padding}`}>
    <Card>
      <Card.Header>{hero.name}</Card.Header>
      <Card.Body>
        <div className="row">
          <div className="col-lg-3 col-12">
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-lg-9 col-12">
            <Card.Title>Description</Card.Title>
            <Card.Text>{hero.description || 'N/A'}</Card.Text>
            <Card.Title>Comics</Card.Title>
            {hero.comics && hero.comics.items.map((item, i) => (<Comic
              id={item.resourceURI.split(/[\s/]+/).pop()}
              key={i}
            />))
            }
          </div>
        </div>
      </Card.Body>
    </Card>
  </div> : <Spinner />
);

View.propTypes = {
  loading: T.bool.isRequired,
  hero: T.shape({
    name: T.string,
  }).isRequired,
};

export default View;
