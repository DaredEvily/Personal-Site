import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

const Card = ({ title, description, image, link }) => {
  // If no valid external link, render a non-link card for accessibility
  const hasLink = link && link !== '#';

  const content = (
    <>
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
    </>
  );

  if (!hasLink) {
    return <div className="card">{content}</div>;
  }

  return (
    <a
      className="card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} - open in new tab`}
    >
      {content}
    </a>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default Card;
