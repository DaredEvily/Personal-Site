import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

const Card = ({ title, description, image, link }) => {
  const handleClick = () => {
    if (!link || link === '#') return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="card-link">View ↗</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default Card;
