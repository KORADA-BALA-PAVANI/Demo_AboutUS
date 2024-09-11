import React from 'react';

const Card = ({ imgSrc, title, text, imgAlt, imgPosition }) => {
  return (
    <div className="col-md-12 card-custom mb-4">
      <div className="row no-gutters align-items-center">
        {imgPosition === 'left' && (
          <>
            <div className="col-md-6">
              <img src={imgSrc} className="img-fluid" alt={imgAlt} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
          </>
        )}
        {imgPosition === 'right' && (
          <>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={imgSrc} className="img-fluid" alt={imgAlt} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
