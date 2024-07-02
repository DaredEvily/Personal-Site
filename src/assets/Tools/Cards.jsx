// Card.js
import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css'

const Card = ({ title, description, image, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className="project-card" onClick={handleClick}>
      {image && <img src={image} alt={title} width="300" height="200" />}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
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
